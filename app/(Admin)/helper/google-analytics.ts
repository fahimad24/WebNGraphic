import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { format, subDays } from "date-fns";

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    project_id: process.env.GOOGLE_PROJECT_ID, // <- include this!
  },
});

const formatDate = (date: Date) => format(date, "yyyy-MM-dd");

export function getDateRange(days: number) {
  const today = new Date();
  const startDate = subDays(today, days);
  return {
    startDate: formatDate(startDate),
    endDate: formatDate(today),
  };
}

// Helper to run a report
async function runReport(
  dimensions: string[],
  metrics: string[],
  days = 30,
  orderBy?: any
) {
  const { startDate, endDate } = getDateRange(days);

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${process.env.GA4_PROPERTY_ID}`, // ← GA4 property ID (no "ga:" prefix)
    dateRanges: [{ startDate, endDate }],
    dimensions: dimensions.map((name) => ({ name })),
    metrics: metrics.map((name) => ({ name })),
    orderBys: orderBy ? [orderBy] : undefined,
    limit: 10,
  });

  return response;
}

// Total analytics overview
export async function getAnalyticsData(days = 30) {
  return runReport(
    ["date"],
    [
      "sessions",
      "totalUsers",
      "screenPageViews",
      "bounceRate",
      "userEngagementDuration",
    ],
    days
  );
}

// Top pages
export async function getTopPages(days = 30) {
  return runReport(["pagePath"], ["screenPageViews"], days, {
    metric: { metricName: "screenPageViews" },
    desc: true,
  });
}

// Top referrers
export async function getTopReferrers(days = 30) {
  return runReport(["sessionSource"], ["sessions"], days, {
    metric: { metricName: "sessions" },
    desc: true,
  });
}

// Device categories
export async function getDeviceCategories(days = 30) {
  return runReport(["deviceCategory"], ["sessions"], days, {
    metric: { metricName: "sessions" },
    desc: true,
  });
}

// Top browsers
export async function getBrowsers(days = 30) {
  return runReport(["browser"], ["sessions"], days, {
    metric: { metricName: "sessions" },
    desc: true,
  });
}
