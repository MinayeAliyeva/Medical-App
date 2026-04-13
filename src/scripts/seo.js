import { siteData } from "../data/siteData";

const upsertMeta = (selector, attr, content) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, selector.includes("property=") ? selector.match(/property="([^"]+)"/)[1] : selector.match(/name="([^"]+)"/)[1]);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const injectJsonLd = (id, payload) => {
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(payload);
};

export const applySeo = (routeKey = "/") => {
  const route = siteData.routes[routeKey] || siteData.routes["/"];
  const title = route?.seoTitle || siteData.seo.title;
  const description = route?.description || siteData.seo.description;

  document.title = title;

  upsertMeta('meta[name="description"]', "name", description);
  upsertMeta('meta[name="keywords"]', "name", siteData.seo.keywords.join(", "));
  upsertMeta('meta[property="og:title"]', "property", title);
  upsertMeta('meta[property="og:description"]', "property", description);
  upsertMeta('meta[property="og:type"]', "property", "website");

  injectJsonLd("faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  });

  injectJsonLd("person-schema", {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: siteData.brand.name,
    medicalSpecialty: "Cardiovascular Surgery",
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.contact.mainClinic.address,
      addressLocality: "Bakı",
      addressCountry: "AZ"
    },
    telephone: siteData.contact.mainClinic.phone1,
    sameAs: siteData.contact.socials.map((item) => item.href)
  });
};
