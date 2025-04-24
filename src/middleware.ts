import type {MiddlewareHandler} from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
	const response = await next();
	const pathname = new URL(context.request.url).pathname;

	// Cache static assets (you can adjust the file types or add more)
	if (pathname.match(/\.(js|css|woff2?|svg|png|jpg|jpeg|gif|webp)$/)) {
		response.headers.set(
			"Cache-Control",
			"public, max-age=31536000, immutable",
		);
	} else {
		// No caching for HTML/pages by default
		response.headers.set(
			"Cache-Control",
			"no-cache, no-store, must-revalidate",
		);
	}

	return response;
};
