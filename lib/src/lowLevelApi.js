const overwrites = require('./overwrites');

let alreadyCalled = false;

module.exports = (input => {
    if(alreadyCalled)
        throw new Error('You can overwrite components only once per execution!');

    input.forEach(overwrite => {
        overwrites[overwrite.name].override.useTheme({
            [overwrite.name]: overwrite,
        });
    });

    alreadyCalled = true;
    return require('react-native-elements');
});
