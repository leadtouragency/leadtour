/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'api.leadtouragency.com',
            port: '',
            pathname: '/storage/**',
        }, ],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/en',
            permanent: true,
        }, ];
    },
    reactStrictMode: false,
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],

    },

};

export default nextConfig;