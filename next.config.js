const withPWA = require("next-pwa");

module.exports = withPWA({
  // other next config
  reactStrictMode: true,
  pwa: {
    dest: "public",
  },
});
