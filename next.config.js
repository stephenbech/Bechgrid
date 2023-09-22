/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'images.pexels.com',
         pathname: '/photos/**',
         port: '',
       }
     ]
   },
   
 };
 
 module.exports = nextConfig;
 