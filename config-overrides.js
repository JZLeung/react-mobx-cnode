/* eslint-disable */
const rewireEslint = require('react-app-rewire-eslint')
const { injectBabelPlugin } = require('react-app-rewired')

function overrideEslintOptions(options) {
    // do stuff with the eslint options...
    return options
}

/* config-overrides.js */
module.exports = function override(config, env) {
    config = injectBabelPlugin([ '@babel/plugin-proposal-decorators', { legacy: true } ], config)
    config = rewireEslint(config, env, overrideEslintOptions)
    return config
}
