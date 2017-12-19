module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/header-policy'));

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
  },
  policies:['headers'], // this is for CLI to automatically add to "policies" whitelist in gateway.config
  options: {  // This is for CLI to ask about params 'eg plugin configure example'
    headerKeys: {
      title: 'Request header name',
      description: 'the name of the header to add or modify',
      type: 'string'
    },
    headerValues: {
      title: 'Request header value',
      description: 'the value of the header to add or modify',
      type: 'string'
    }
  }
};
