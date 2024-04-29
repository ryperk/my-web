/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images : {
    remotePatterns: [
      { 
        hostname: '*.placeholder.com',
      },{
        hostname:'img.freepik.com'
      }
    ]
  }
}
 
const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
