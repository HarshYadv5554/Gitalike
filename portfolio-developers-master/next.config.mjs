/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		// mdxRs: true,
	},
	env: {
		/** GitHub username loaded in build time. */
		GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'octocat',
	},
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: '**.githubusercontent.com' },
			{ protocol: 'https', hostname: '**.github.com' }
		],
	},
};

export default (nextConfig);
