const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	basePath: isProd ? "/your-repo-name" : "",
	assetPrefix: isProd ? "/your-repo-name/" : "",
	trailingSlash: true,
	images: {
		loader: "akamai",
		path: "",
	},
};

export default nextConfig;
