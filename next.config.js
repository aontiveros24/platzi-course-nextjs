/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy'],
  },
}
// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     customKey: 'customValue',
//   },
//   basePath: '/dist',
//   compress: true,
//   async redirects() {
//     return [
//       {
//         source: '/hola',
//         destination: 'https://gndx.dev',
//         permanent: true,
//       }
//     ]
//   }
// }