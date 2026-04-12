import type {
  Blog,
  BlogPosting,
  BreadcrumbList,
  Organization,
  Service,
  WebPage,
  WithContext,
} from "schema-dts";

export const organization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebNGraphic",
  url: "https://webngraphic.com",
  logo: "https://webngraphic.com/icons/logoicon.png",
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
  name: "WebNGraphic | Web Development & Graphic Design Services",
  url: "https://webngraphic.com",
  description:
    "WebNGraphic offers professional web development and graphic design services to help businesses establish a strong online presence with custom websites and stunning visuals.",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
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
};

export const aboutPageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
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
