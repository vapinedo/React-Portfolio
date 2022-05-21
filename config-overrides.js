const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@app": "src",
        "@core": "src/core",
        "@assets": "src/assets",
        "@shared": "src/shared",
        "@feature": "src/feature"
    })(config);
    return config;
};