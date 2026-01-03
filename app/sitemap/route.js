



// export async function GET() {
//   const baseUrl = "https://careersworldwide.in";

//   const pages = [
//     { path: "/", priority: "1.0", changefreq: "daily" },
//         { path: "/contact", priority: "0.9", changefreq: "monthly" },
//     { path: "/job-openings", priority: "0.9", changefreq: "daily" },
//     { path: "/partner-with-us", priority: "0.9", changefreq: "weekly" },
//     { path: "/careers", priority: "0.8", changefreq: "weekly" },
//     { path: "/about", priority: "0.7", changefreq: "monthly" },
//     { path: "/howwework", priority: "0.7", changefreq: "monthly" },
//     { path: "/expertise", priority: "0.7", changefreq: "monthly" },
//     { path: "/services/contractualrecruitment", priority: "0.6", changefreq: "monthly" },
//     { path: "/services/headhunting", priority: "0.6", changefreq: "monthly" },
//     { path: "/services/payrollmanagement", priority: "0.6", changefreq: "monthly" },
//     { path: "/services/permanentrecruitment", priority: "0.6", changefreq: "monthly" },
//   ];

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${pages
//       .map(
//         ({ path, priority, changefreq }) => `
//       <url>
//         <loc>${baseUrl}${path}</loc>
//         <changefreq>${changefreq}</changefreq>
//         <priority>${priority}</priority>
//       </url>`
//       )
//       .join("")}
//   </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }
