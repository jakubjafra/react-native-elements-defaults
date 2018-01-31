const lowLevelApi = require('./src/lowLevelApi');
const utils = require('./src/utils');
const highLevelOverwrites = require('./src/highLevelOverwrites');

module.exports = Object.assign({}, highLevelOverwrites, {
    Overwrite: utils.Overwrite,
    getStyledComponents: lowLevelApi,
});
