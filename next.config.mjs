/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize', 'uuid'],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
