const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://restcountries.com/v3.1/all',
      changeOrigin: true,
      secure: false,
    })
  );
};
