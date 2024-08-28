/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Habilita el App Router (ya habilitado por defecto en Next.js 13+)
    },
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  };
  
  export default nextConfig;
  
