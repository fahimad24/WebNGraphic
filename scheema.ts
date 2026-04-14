import type {
  Article,
  Blog,
  BlogPosting,
  BreadcrumbList,
  Organization,
  Person,
  ReadAction,
  Service,
  WebPage,
  WithContext,
} from "schema-dts";

export const organization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://webngraphic.com/#organization",
  name: "WebNGraphic",
  url: "https://webngraphic.com",
  image: "https://webngraphic.com/opengraph/home.jpg",
  logo: {
    "@type": "ImageObject",
    url: "https://webngraphic.com/icons/logoicon.png",
    width: "512",
    height: "512",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER2,
    contactType: "Customer Service",
    email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    availableLanguage: "English",
    contactOption: "TollFree",
  },
  sameAs: process.env.NEXT_PUBLIC_FACEBOOK_PAGE,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://webngraphic.com/#website",
  url: "https://webngraphic.com",
  name: "WebNGraphic",
  inLanguage: "en",
  publisher: {
    "@id": "https://webngraphic.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://webngraphic.com/blog?search={search_term_string}",
    },
    "query-input": {
      "@type": "PropertyValueSpecification",
      valueRequired: true,
      valueName: "search_term_string",
    },
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://webngraphic.com/#localbusiness",
  name: "WebNGraphic",
  url: "https://webngraphic.com",
  image: "https://webngraphic.com/opengraph/home.jpg",
  logo: "https://webngraphic.com/icons/logoicon.png",
  telephone:
    process.env.NEXT_PUBLIC_PHONE_NUMBER2 || process.env.NEXT_PUBLIC_PHONE_NUMBER,
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
  address: {
    "@type": "PostalAddress",
    streetAddress: process.env.NEXT_PUBLIC_ADDRESS2 || process.env.NEXT_PUBLIC_ADDRESS,
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-33.8688",
    longitude: "151.2093",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone:
      process.env.NEXT_PUBLIC_PHONE_NUMBER2 || process.env.NEXT_PUBLIC_PHONE_NUMBER,
    email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

export const serviceSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web development and graphic design",
  provider: organization,
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  description: "",
};
export const homePageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://webngraphic.com/#webpage",
  name: "WebNGraphic | Web Development & Graphic Design Services",
  url: "https://webngraphic.com",
  description:
    "We provide expert web development, web design, and graphic design. Launch a conversion-focused site in 4-6 weeks. Request a free project estimate.",
  inLanguage: "en",
  isPartOf: {
    "@id": "https://webngraphic.com/#website",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://webngraphic.com/opengraph/home.jpg",
    width: "1200",
    height: "630",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://webngraphic.com/#organization",
    name: "WebNGraphic",
    url: "https://webngraphic.com",
    logo: {
      "@type": "ImageObject",
      url: "https://webngraphic.com/icons/logoicon.png",
    },
  },
  mainEntity: {
    "@type": "Service",
    name: "Web Design and Graphic Design",
    description:
      "Custom websites and creative designs to enhance your brand's digital presence.",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://webngraphic.com",
      },
    ],
  },
  potentialAction: {
    "@type": "ReadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://webngraphic.com",
    },
    agent: {
      "@type": "Person",
      name: "Website Visitor",
    },
  },
};

export const aboutPageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://webngraphic.com/about#aboutpage",
  name: "About us | WebNGraphic",
  url: "https://webngraphic.com/about",
  description:
    "Meet the team behind WebNGraphic — expert web developers and graphic designers dedicated to crafting impactful digital solutions that help businesses thrive online.",
  inLanguage: "en",
  mainEntity: {
    "@type": "Organization",
    name: "WebNGraphic",
    url: "https://webngraphic.com",
    logo: {
      "@type": "ImageObject",
      url: "https://webngraphic.com/icons/logoicon.png",
    },
    description:
      "WebNGraphic is a creative digital agency offering professional web development and graphic design services to businesses around the world.",
    sameAs: process.env.NEXT_PUBLIC_FACEBOOK_PAGE,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://webngraphic.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://webngraphic.com/about",
      },
    ],
  },
};

export const aboutWebPageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://webngraphic.com/about#webpage",
  name: "About WebNGraphic",
  url: "https://webngraphic.com/about",
  description:
    "Learn about WebNGraphic's story, team, and approach to web development and graphic design.",
  inLanguage: "en",
  isPartOf: {
    "@id": "https://webngraphic.com/#website",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://webngraphic.com/opengraph/about.jpg",
    width: "1200",
    height: "630",
  },
  publisher: {
    "@id": "https://webngraphic.com/#organization",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://webngraphic.com/about",
    },
    agent: {
      "@type": "Person",
      name: "WebNGraphic Team",
    },
  } as ReadAction,
};

export const aboutPersonSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://webngraphic.com/about#person",
  name: "WebNGraphic Team",
  jobTitle: "Creative and Development Team",
  url: "https://webngraphic.com/about",
  image: "https://webngraphic.com/opengraph/about.jpg",
  worksFor: {
    "@id": "https://webngraphic.com/#organization",
  },
};

export const aboutArticleSchema: WithContext<Article> = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://webngraphic.com/about#article",
  headline: "About WebNGraphic",
  description:
    "A summary of WebNGraphic's story, team, and approach to web development and graphic design.",
  articleBody:
    "WebNGraphic began its journey in 2020 with a group of passionate designers and developers. Our goal was to bring a creative change in the digital space through smart design and web solutions.",
  image: ["https://webngraphic.com/opengraph/about.jpg"],
  author: {
    "@id": "https://webngraphic.com/about#person",
  },
  publisher: {
    "@id": "https://webngraphic.com/#organization",
  },
  mainEntityOfPage: {
    "@id": "https://webngraphic.com/about#webpage",
  },
  about: {
    "@id": "https://webngraphic.com/#organization",
  },
};

export const blogPageSchema: WithContext<Blog> = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "WebNGraphic Blog",
  url: "https://webngraphic.com/blog",
  description:
    "WebNGraphic's official blog covering the latest trends, tips, and insights in web development, graphic design, branding, and digital marketing.",
  publisher: {
    "@type": "Organization",
    name: "WebNGraphic",
    url: "https://webngraphic.com",
    logo: {
      "@type": "ImageObject",
      url: "https://webngraphic.com/icons/logoicon.png",
    },
    sameAs: process.env.NEXT_PUBLIC_FACEBOOK_PAGE,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://webngraphic.com/blog",
  },
  image: {
    "@type": "ImageObject",
    url: "https://webngraphic.com/opengraph/blog.jpg",
    width: "1200",
    height: "630",
  },
};

export const getBlogBreadcrumbSchema = (blog: {
  title: string;
  id: string;
}): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://webngraphic.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://webngraphic.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: blog.title,
      item: `https://webngraphic.com/blog/${blog.id}`,
    },
  ],
});

export const generateBlogSchema = (blog: {
  title: string;
  content: string;
  imageLink: string;
  createdAt: string | Date;
  author?: { name: string };
  id: string;
}): WithContext<BlogPosting> => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.title,
  description: blog.content,
  image: blog.imageLink,
  datePublished: new Date(blog.createdAt).toISOString(),
  author: {
    "@type": "Person",
    name: blog.author?.name || "WebNGraphic",
  },
  publisher: {
    "@type": "Organization",
    name: "WebNGraphic",
    logo: {
      "@type": "ImageObject",
      url: "https://webngraphic.com/icons/logoicon.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://webngraphic.com/blog/${blog.id}`,
  },
});

export const graphicDesignSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Graphic Design Services",
  name: "Graphic Design Services | WebNGraphic",
  provider: {
    "@type": "Organization",
    name: "WebNGraphic",
    url: "https://webngraphic.com",
    logo: {
      "@type": "ImageObject",
      url: "https://webngraphic.com/icons/logoicon.png",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  description:
    "WebNGraphic provides expert graphic design services including logo creation, brand identity systems, print design, social media visuals, and UI/UX design solutions to build a strong and consistent brand presence.",
  offers: {
    "@type": "Offer",
    url: "https://webngraphic.com/graphic-design",
    priceCurrency: "USD",
    price: "Custom", // Replace with a value if fixed
    availability: "https://schema.org/InStock",
  },
  category: "Design Services",
  url: "https://webngraphic.com/graphic-design",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://webngraphic.com/graphic-design",
  },
};
export const webDevelopmentSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Web Development Services | WebNGraphic",
  url: "https://webngraphic.com/web-development",
  description:
    "WebNGraphic provides responsive website design, e-commerce solutions, NDIS websites, CMS and custom web application development using modern technologies like React and Next.js.",
  mainEntity: {
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: {
      "@type": "Organization",
      name: "WebNGraphic",
      url: "https://webngraphic.com",
      logo: "https://webngraphic.com/icons/logoicon.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER2,
        email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
        availableLanguage: "English",
      },
      sameAs: [process.env.NEXT_PUBLIC_FACEBOOK_PAGE || ""].filter(Boolean),
    } as Organization,
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    description:
      "We offer comprehensive web development solutions including NDIS websites, CMS systems, e-commerce platforms, and custom web apps tailored for your business.",
  } as Service,
};

export const webDevBreadcrumbSchema: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://webngraphic.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Web Development",
      item: "https://webngraphic.com/web-development",
    },
  ],
};

interface WebPageSchemaInput {
  id: string;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

interface BreadcrumbItemInput {
  name: string;
  item: string;
}

export const createWebPageSchema = ({
  id,
  name,
  url,
  description,
  imageUrl,
}: WebPageSchemaInput): WithContext<WebPage> => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": id,
  name,
  url,
  description,
  inLanguage: "en",
  isPartOf: {
    "@id": "https://webngraphic.com/#website",
  },
  publisher: {
    "@id": "https://webngraphic.com/#organization",
  },
  ...(imageUrl
    ? {
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: "1200",
          height: "630",
        },
      }
    : {}),
  potentialAction: {
    "@type": "ReadAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: url,
    },
    agent: {
      "@type": "Person",
      name: "Website Visitor",
    },
  },
});

export const createBreadcrumbSchema = (
  items: BreadcrumbItemInput[],
): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});
