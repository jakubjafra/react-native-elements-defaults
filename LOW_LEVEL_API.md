# react-native-elements-defaults

Low level api overview.

## Basics

```javascript
import { Overwrite } from 'react-native-elements-defaults/helpers';
import withOverwrites from 'react-native-elements-defaults';

// style the components
const { Header } = withOverwrites([
    new Overwrite('Text', Overwrite.TYPE.FUNCTIONAL_COMPONENT_ATTRIBUTES, Overwrite.SCOPE.DEFAULTS, {
        style: {
            fontFamily: 'Times New Roman',
        },
    })
]);

// from now on, Header (or any other element) uses 'Times New Roman' font
```

Insights:
* After you overwrite components, there is no way back. Use wisely!
* Since some components may be imported in others, we use array to specify overwrites priorities.
* You can specify different type of overwrite (`CLASS_COMPONENT_ATTRIBUTES`, `FUNCTIONAL_COMPONENT_ATTRIBUTES` or `FILE`) - in order to get different type of overwritten component as a result (function, class, or overwrite whole component with your own)
* For those types you can specify different scopes that are affected (`FULL`, `DEFAULTS` or `DEFAULTS_DEEP`).
