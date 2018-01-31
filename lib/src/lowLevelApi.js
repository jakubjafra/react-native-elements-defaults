const overwrites = require('./overwrites');
const utils = require('./utils');

let alreadyCalled = false;

module.exports = (input => {
    if(alreadyCalled)
        throw new Error('You can overwrite components only once per execution!');

    input.forEach(overwrite => {
        if(!(overwrite instanceof utils.Overwrite))
            throw new Error('You can only pass overwrite instances to this function!');

        if(!overwrites[overwrite.name])
            throw new Error('Unrecognized overwrite instance!');

        overwrites[overwrite.name].override.useTheme({
            [overwrite.name]: overwrite,
        });
    });

    alreadyCalled = true;
    return require('react-native-elements');
});
