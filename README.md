# poppins-label

A [Mary Poppins](https://github.com/btford/mary-poppins) plugin for configuring the [label](https://github.com/btford/poppins-label) plugin.

## Install

`npm install https://github.com/cogniteev/poppins-configure-label.git`

## Configure

To use this plugin, you need to load it in your config file with `couldYouPlease`:

```javascript
// config.js
module.exports = function (poppins) {

  poppins.config = { /*...*/ };

  // load label plugin
  poppins.couldYouPlease('label');

  // load configuration plugin
  poppins.couldYouPlease('configure-label');
};
```


## License
MIT
