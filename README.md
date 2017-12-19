# express-gateway-plugin-modify-headers
Express gateway plugin for adding/modifying request headers.
Based on [example plugin](https://github.com/ExpressGateway/express-gateway-plugin-example) for [Express Gateway](http://www.express-gateway.io/)

### Installation:

Simply type from your shell environment:

```bash
eg plugin install modify-headers
```

## Quick start

1. Make sure the plugin is listed in [system.config.yml file](https://www.express-gateway.io/docs/configuration/system.config.yml/).
This is done automatically for you if you used the command above.

2. Add the configuration keys to [gateway.config.yml file](https://www.express-gateway.io/docs/configuration/gateway.config.yml/).

```yaml
policies:
      - headers:
          - action:
              headerKeys: 'content-type, accept'
              headerValues: 'application/json, *'
```

### Configuration Parameters

`headerKeys`: Coma separated list of request header names to change or add.

`headerValues`: Coma separated list of request header values corresponding to respective names to change or add.

### Additional documentation:

[Express Gateway Overview](http://www.express-gateway.io/about/)

Express Gateway plugin explanation:
[Plugin Documentation](http://www.express-gateway.io/docs/plugins/)
