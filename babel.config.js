module.exports = function (api) {
    api.cache(false);

    const presets = [
        "@babel/env",
        "@babel/react"
    ];
    const plugins = [
        "@babel/plugin-proposal-class-properties"
    ];
  
    return {
        presets,
        plugins
    };
  }