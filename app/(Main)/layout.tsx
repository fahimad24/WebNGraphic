import { WhatsAppChatButton } from "@/components/manual/button/whatsapp-chat-button";
import MainNavbar from "@/components/manual/Navbar/MainNavbar";
import { Toaster } from "@/components/ui/sonner";
import { ResponseModalProvider } from "@/context/response-form-modal";
import { organization } from "@/scheema";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://webngraphic.com"),
  title: {
    template: "%s | WebNGraphic",
    default: "WebNGraphic | Web Development & Graphic Design Services",
  },
  description:
    "WebNGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
  keywords: [
    "web development",
    "graphic design",
    "website design",
    "UI/UX design",
    "responsive websites",
    "logo design",
    "web design",
    "WebnGraphic",
    "website development",
    "responsive websites",
  ],
  authors: [{ name: "WebNGraphic", url: "https://webngraphic.com" }],
  creator: "WebNGraphic",
  publisher: "WebNGraphic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webngraphic.com",
    siteName: "WebNGraphic",
    title: "WebNGraphic - Web Development & Graphic Design Services",
    description:
      "Custom web development and graphic design solutions to help your business stand out online with responsive websites and eye-catching visuals.",
    images: [
      {
        url: "opengraph/home.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic - Web Development & Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNGraphic - Web Development & Graphic Design Services",
    description:
      "Custom web development and graphic design solutions to help your business stand out online.",
    images: ["opengraph/home.jpg"],
    creator: "@webngraphic",
    site: "@rplfastrack",
  },
};
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} bg-Mbg ${geistMono.variable} antialiased`}
      >
        <ResponseModalProvider>
          <MainNavbar />
          <main>{children}</main>
          {whatsappNumber && (
            <WhatsAppChatButton
              phoneNumber={whatsappNumber}
              message="Hi there! I'm interested in your services."
            />
          )}
          <Footer />
          <Toaster />
          {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        </ResponseModalProvider>
      </body>
    </html>
  );
}
