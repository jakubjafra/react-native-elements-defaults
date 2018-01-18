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
const Header = require('./Header');
const Icon = require('./Icon');
const List = require('./List');
const ListItem = require('./ListItem');
const PricingCard = require('./PricingCard');
const SocialIcon = require('./SocialIcon');
const Text = require('./Text');
const Tile = require('./Tile');

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
    [Header.name]: Header,
    [Icon.name]: Icon,
    [List.name]: List,
    [ListItem.name]: ListItem,
    [PricingCard.name]: PricingCard,
    [SocialIcon.name]: SocialIcon,
    [Text.name]: Text,
    [Tile.name]: Tile,
};
