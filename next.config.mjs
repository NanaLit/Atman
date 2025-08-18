/** @type {import('next').NextConfig} */

const nextConfig = {

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '45.130.43.29',
				port: '5000',
                pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'api.atman-auto.ru',
                pathname: '**',
			},
		],
		formats: ['image/avif', 'image/webp'],
	},
	env: {
		HOST: process.env.HOST,
		DOMAIN: process.env.DOMAIN,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	//	swcMinify: true,
};

export default nextConfig;
