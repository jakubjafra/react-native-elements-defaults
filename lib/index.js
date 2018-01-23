const lowLevelApi = require('./src/lowLevelApi');
const utils = require('./src/utils');

module.exports = {
    Overwrite: utils.Overwrite,
    getStyledComponents: lowLevelApi,
};
