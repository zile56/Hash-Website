/** Change this once if the production domain ever moves. */
export const SITE_URL = "https://hash.engineering";
export const SITE_NAME = "Hash";

const HOME_TITLE = "Hash — Technical Systems Consulting & Engineering";
const HOME_DESC =
  "Engineering-led technical consulting specializing in AI & Agentic Systems, Data Engineering, Full-Stack Platforms, and Mobile Applications.";

/** Head tags for a given path. Used by the prerenderer and by client routing. */
export function metaForPath(pathname) {
  if (pathname === "/" || pathname === "") {
    return { title: HOME_TITLE, description: HOME_DESC, canonical: `${SITE_URL}/`, type: "website" };
  }

  return {
    title: "Page not found | Hash",
    description: HOME_DESC,
    canonical: `${SITE_URL}${pathname}`,
    type: "website",
    noindex: true,
  };
}

export function allPaths() {
  return ["/"];
}

/** Schema.org JSON-LD for a path — helps search engines show rich results. */
export function jsonLdForPath(pathname) {
  const meta = metaForPath(pathname);

  const organisation = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_DESC,
    knowsAbout: [
      "AI automation",
      "AI voice agents",
      "n8n & workflow engineering",
      "Full-stack development",
      "Mobile apps",
      "Web design & development",
      "Cloud, data & DevOps",
      "Game development",
      "POS systems",
      "SEO",
      "Digital advertising"
    ]
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${meta.canonical}#webpage`,
    url: meta.canonical,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_URL}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organisation, webpage],
  };
}
