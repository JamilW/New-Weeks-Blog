/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    env: {
        NEXT_PUBLIC_SENDGRID_API_KEY: "my-value",
        NEXT_PUBLIC_FROM_EMAIL: "my-value",
        NEXT_PUBLIC_TO_EMAIL: "my-value",
        // NEXT_PUBLIC_API_URL: "my-value"
    },
    // eslint: { 
    //     ignoreDuringBuilds: true 
    // }
}

module.exports = nextConfig
    
