/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Tắt SWC minify để sử dụng Babel với plugin inline-react-svg
    swcMinify: false,
}

module.exports = nextConfig

