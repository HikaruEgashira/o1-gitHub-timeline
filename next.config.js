const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: isProd ? "/o1-github-timeline" : "",
	assetPrefix: isProd ? "/o1-github-timeline/" : "",
	trailingSlash: true,
	images: {
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
