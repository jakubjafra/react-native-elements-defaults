# react-native-elements-defaults

Low level api overview. You probably shouldn't use this directly.

## Basics

```javascript
import { getStyledComponents, Overwrite } from 'react-native-elements-defaults';

// style the components
const { Header } = getStyledComponents([
    new Overwrite('Text', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, StyleSheet.create({
        style: {
            fontFamily: 'Times New Roman',
        },
    }))
]);

// from now on, Header (or any other element) uses 'Times New Roman' font
```

Insights:
* After you overwrite components, there is no way back. Use wisely!
* Since some components may be imported in others, we use array to specify overwrites priorities.
* You can specify different type of overwrite (`CLASS_COMPONENT_ATTRIBUTES`, `FUNCTIONAL_COMPONENT_ATTRIBUTES` or `FILE`) - in order to get different type of overwritten component as a result (function, class, or overwrite whole component with your own)
* For those types you can specify different scopes that are affected (`FULL`, `DEFAULTS` or `DEFAULTS_DEEP`).

In order to use this effectively you need to have knowledge about internal structure of `react-native-elements`. For basic usage use high level api, described in Usage section of [README.md].
