



export async function GET() {
  const baseUrl = "https://careersworldwide.in";

  const pages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/job-openings", priority: "0.9", changefreq: "daily" },
    { path: "/partner-with-us", priority: "0.9", changefreq: "weekly" },
    { path: "/careers", priority: "0.8", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "monthly" },
    { path: "/how-we-work", priority: "0.7", changefreq: "monthly" },
    { path: "/expertise", priority: "0.7", changefreq: "monthly" },
    { path: "/contractual-recruitment", priority: "0.6", changefreq: "monthly" },
    { path: "/head-hunting", priority: "0.6", changefreq: "monthly" },
    { path: "/payroll-management", priority: "0.6", changefreq: "monthly" },
    { path: "/permanent-role", priority: "0.6", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        ({ path, priority, changefreq }) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
