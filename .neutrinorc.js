const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
    html: {},
    globalObject: 'this',
  },
  use: [
    reactComponents({
        target: { node: true },
        html: {},
    }),
    jest(),
    (neutrino) => {
        neutrino.config.output.globalObject('this')
    }
  ],
};
