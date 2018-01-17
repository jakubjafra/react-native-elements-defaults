const colors = require('./colors');
const fonts = require('./fonts');
const Text = require('./Text');

module.exports = {
    [colors.name]: colors,
    [fonts.name]: fonts,
    [Text.name]: Text,
};
