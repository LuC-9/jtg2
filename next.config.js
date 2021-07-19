
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['n1Ynnq7BXNiTkxcz6b8Ahu'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  