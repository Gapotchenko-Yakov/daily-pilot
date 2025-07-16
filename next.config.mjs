/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        reactRemoveProperties: false,
    },
    staticPageGenerationTimeout: 180,
};

export default nextConfig;
