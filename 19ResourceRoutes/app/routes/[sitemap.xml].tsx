export function loader() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://www.example.com/</loc>
		<priority>1.0</priority>
		<changefreq>daily</changefreq>
	</url>
</urlset>
`,
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );
}
