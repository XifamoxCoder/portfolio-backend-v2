export default () => ({
  port: process.env.APP_PORT || 4000,
  host: process.env.APP_HOST || '127.0.0.1',
  apiPrefix: process.env.APP_API_PREFIX || 'api',
  apiVersion: process.env.APP_API_VERSION || 'v1',
  apiDocsPath: process.env.APP_API_DOCS_PATH || 'docs',
});
