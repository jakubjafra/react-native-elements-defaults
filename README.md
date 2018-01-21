react-native-elements-defaults
==============================

Small theming library that provides easy to set defaults for `react-native-elements` lib - without performance penalty for doing so.

# Problems

### No batch styling

Ever wanted to change the `fontFamily` for every Text element in your app? I haven't found a way to do it specifying it all over the place.

### Your styling can't reach library base components

You can style `react-native-elements` components for your app - but you can't style them *once for the whole app* - you can't override `NewText` component used in other components by `react-native-elements`, right? Well, turns out - there is a way.

# Usage

...

# How it works?

It basicly uses require cache to override `default export`ed components with ones that accepts external styling from `react-native-elements`.

**Note:** This is working library, meant to solve problems - **now**. There are some POC already proposed about styling in `react-native-elements` repository, for example:

* https://github.com/react-native-training/react-native-elements/pull/760 (really good PR - it uses the same approach as this, check it out!)
* https://github.com/react-native-training/react-native-elements/issues/216

However, lack of velocity on those changes and statements like *"theming should be limited to just colors and fonts"* leads to impression that theming is not something around the corner.
When - or if - working version of theming will be introduced to `react-native-elements` is debatable - so for now you can style it on your own. Later - hopefully - this lib will not be needed anymore.

#### Base idea

```javascript
const defaultStyles = StyleSheet.create({
    text: {
        fontFamily: 'Zapfino'
    }
});

// import only the component module
const Text = require('react-native-elements/src/text/Text');

// simply wrap it with overwrite function
const TextDefault = Text.default;
let NewText = function (props) {
    let newProps = {
        style: props.style ? [...props.style, defaultStyles.text] : defaultStyles.text,
    };

    // we're still calling the base component:
    return TextDefault.call(undefined, _.defaultsDeep(newProps, props));
};
NewText.propTypes = TextDefault.propTypes;
NewText.defaultProps = TextDefault.defaultProps;

// override old component (where the magic happens):
Text.default = NewText;

// require cache keeps the reference to Text object - that is now overriden,
// so all components that were using Text are now using wrapped one:
let elements = require('react-native-elements');
```

#### Low level API

...

#### Flexibility & priority

...


#### High level API

See _Usage_.
