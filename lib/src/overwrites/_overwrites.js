const colors = require('./colors');
const fonts = require('./fonts');

const Avatar = require('./Avatar');
const Badge = require('./Badge');
const Button = require('./Button');
const ButtonGroup = require('./ButtonGroup');
const Card = require('./Card');
const CheckBox = require('./CheckBox');
const Divider = require('./Divider');
const FeaturedTile = require('./FeaturedTile');
const Icon = require('./Icon');
const Text = require('./Text');

module.exports = {
    [colors.name]: colors,
    [fonts.name]: fonts,
    [Avatar.name]: Avatar,
    [Badge.name]: Badge,
    [Button.name]: Button,
    [ButtonGroup.name]: ButtonGroup,
    [Card.name]: Card,
    [CheckBox.name]: CheckBox,
    [Divider.name]: Divider,
    [FeaturedTile.name]: FeaturedTile,
    [Icon.name]: Icon,
    [Text.name]: Text,
};
