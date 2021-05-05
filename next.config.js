const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
  images: {
    domains: [process.env.RANDOM_CAT_BASE_URL],
  },
  env: {
      RANDOM_CAT_URL: process.env.RANDOM_CAT_URL
  }

})

// module.exports = {
//     images: {
//       domains: [process.env.RANDOM_CAT_BASE_URL],
//     },
//     env: {
//         RANDOM_CAT_URL: process.env.RANDOM_CAT_URL
//     }
//   }