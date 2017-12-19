module.exports = {
  name: 'headers',
  policy: (actionParams) => {
    return (req, res, next) => {
      // eslint-disable-next-line no-console
      console.log('executing policy from modify-headers-plugin for setting headers', actionParams);
      let keys = [], values = [];
      if (typeof actionParams.headerKeys === "string" && actionParams.headerKeys) {
        keys = actionParams.headerKeys.split(',');
        keys = keys.map(function(k) {
          return k.trim();
        });
      } else {
        console.error('Policy headers could not be applied for arguments keys:' + actionParams.headerKeys)
        next();
      }

      if (typeof actionParams.headerValues === "string" && actionParams.headerValues) {
        values = actionParams.headerValues.split(',');
        values = values.map(function(k) {
          return k.trim();
        });
      } else {
        console.error('Policy headers could not be applied for arguments values:' + actionParams.headerValues)
        next();
      }

      if (keys.length !== values.length) {
        console.error('Policy headers could not be applied due different length of arguments (keys and values)');
        next();
      }

      //default headers
      if (keys.length === 0 && values.length === 0) {
        keys[0] = 'Content-Type';
        values[0] = 'application/json';
      }

      keys.forEach(function(key, index) {
        req.headers[key] = values[index];
      })

      console.log('Headers policy ------- current headers are: ',JSON.stringify(req.headers));
      next();
    };
  }
};
