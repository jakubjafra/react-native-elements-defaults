react-native-elements-defaults
==============================

Small **experimental** theming library that provides easy to set defaults for `react-native-elements` lib - without performance penalty for doing so.

# Problems

### No batch styling

Ever wanted to change the `fontFamily` for every Text element in your app? I haven't found a way to do it - without passing it to every used component, all over the app.

### Your styling can't reach library base components

You can style `react-native-elements` components for your app - but you can't style them *once for the whole app* - you can't override `NewText` component used in other components by `react-native-elements`, right? Well, turns out - there is a way.

# Usage

Make `Times New Roman` the default font of your app:

```javascript
import { getStyledComponents, TextOverwrite } from 'react-native-elements-defaults';

const { Button, List, ListItem, /* ... */ } = getStyledComponents([
    new TextOverwrite(StyleSheet.create({
        style: {
            fontFamily: 'Times New Roman',
        },
    }))
]);

```

This will place `fontFamily: 'Times New Roman'` **on top of existing styles** for `Text` component of `react-native-elements` lib, and replace the original `Text` in every other component (for example `ListItem`) with the overwritten one.

# How it works?

It basicly uses require cache to override `default export`ed components with ones that accepts external styling from `react-native-elements`.

**Note:** This is working library, meant to solve problems **now**. There are some POC already proposed about styling in `react-native-elements` repository, for example:

* https://github.com/react-native-training/react-native-elements/pull/760
* https://github.com/react-native-training/react-native-elements/issues/216

You should definitely monitor the status of those PRs.

#### Base idea

```javascript
const defaultStyles = StyleSheet.create({
    text: {
        fontFamily: 'Times New Roman'
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
const elements = require('react-native-elements');
```

#### High level API

See _Usage_.

#### Internal low level API

See [LOW_LEVEL_API.md]

#### Tips

* You can only overwrite once: place your components in one file, and then refer to that file in your app.
* This will affect your `require` cache: do **NOT** import `react-native-elements` in your app.
* Order **DO** matter: for example you should overwrite `Text` component before other components that use it internally.
