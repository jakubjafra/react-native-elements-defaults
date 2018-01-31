const utils = require('./utils');

function constructDefaultFunctionalOverwrite(name){
    return class extends utils.Overwrite {
        constructor(styles){
            super(name, utils.Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, utils.Overwrite.SCOPE.DEFAULTS, styles);
        }
    }
}

function constructDefaultClassOverwrite(name){
    return class extends utils.Overwrite {
        constructor(styles){
            super(name, utils.Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, utils.Overwrite.SCOPE.DEFAULTS, styles);
        }
    }
}

function constructDefaultFileOverwrite(name){
    return class extends utils.Overwrite {
        constructor(styles){
            super(name, utils.Overwrite.TYPE.CLASS_COMPONENT_ATTRIBUTES, utils.Overwrite.SCOPE.DEFAULTS, styles);
        }
    }
}

module.exports = {
    AvatarOverwrite: constructDefaultFunctionalOverwrite('Avatar'),
    BadgeOverwrite: constructDefaultFunctionalOverwrite('Badge'),
    ButtonOverwrite: constructDefaultFunctionalOverwrite('Button'),
    ButtonGroupOverwrite: constructDefaultFunctionalOverwrite('ButtonGroup'),
    Card: constructDefaultFunctionalOverwrite('Card'),
    CheckBoxOverwrite: constructDefaultFunctionalOverwrite('CheckBox'),
    _ColorsOverwrite: constructDefaultFileOverwrite('$colors'),
    DividerOverwrite: constructDefaultFunctionalOverwrite('Divider'),
    FeaturedTileOverwrite: constructDefaultFunctionalOverwrite('FeaturedTile'),
    _FontsOverwrite: constructDefaultFileOverwrite('$fonts'),
    FormInputOverwrite: constructDefaultClassOverwrite('FormInput'),
    FormLabelOverwrite: constructDefaultClassOverwrite('FormLabel'),
    FormValidationMessageOverwrite: constructDefaultClassOverwrite('FormValidationMessage'),
    HeaderOverwrite: constructDefaultFunctionalOverwrite('Header'),
    IconOverwrite: constructDefaultFunctionalOverwrite('Icon'),
    ListOverwrite: constructDefaultFunctionalOverwrite('List'),
    ListItemOverwrite: constructDefaultFunctionalOverwrite('ListItem'),
    PricingCardOverwrite: constructDefaultFunctionalOverwrite('PricingCard'),
    RatingOverwrite: constructDefaultClassOverwrite('Rating'),
    SearchOverwrite: constructDefaultClassOverwrite('Search'),
    SliderOverwrite: constructDefaultClassOverwrite('Slider'),
    SocialIconOverwrite: constructDefaultFunctionalOverwrite('SocialIcon'),
    TextOverwrite: constructDefaultFunctionalOverwrite('Text'),
    TileOverwrite: constructDefaultFunctionalOverwrite('Tile'),
};
