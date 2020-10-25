[![build](https://img.shields.io/github/workflow/status/TroyTae/noliter/noliter/main?style=flat-square)](https://github.com/TroyTae/noliter/actions?query=workflow%3Anoliter)
[![npm](https://img.shields.io/npm/v/noliter?color=%23fb3e44&style=flat-square)](https://www.npmjs.com/package/noliter)
[![license](https://img.shields.io/github/license/TroyTae/noliter?style=flat-square)](https://github.com/TroyTae/noliter/blob/main/LICENSE)

# Noliter

Write code with no literal and get tiny bundle

## Install

```
npm install noliter
```

## API

### Constants

 - [Attribute](./src/constants/Attribute.ts)
 - [EventType](./src/constants/EventType.ts)
 - [InputType](./src/constants/InputType.ts)
 - [Property](./src/constants/Property.ts)
 - [TagName](./src/constants/TagName.ts)

### DOM manipulation

#### sa/ga

`sa` is abbreviation of `set attributes`.  
`ga` is abbreviation of `get attribute`.  

```javascript
import {
  $,
  TAG_NAME_DIV,
  ATTR_ID,
  ATTR_CLASS
} from 'noliter';

const div = $(TAG_NAME_DIV)
  .sa(
    ATTR_ID, 'my-id',
    ATTR_CLASS, 'class-name'
  );

div.ga(ATTR_ID) === 'my-id';
div.ga(ATTR_CLASS) === 'class-name';
```

#### props

```javascript
import {
  $,
  TAG_NAME_INPUT,
  PROP_CHECKED,
  PROP_DISABLED
} from 'noliter';

$(TAG_NAME_INPUT)
  .props(
    PROP_CHECKED, true,
    PROP_DISABLED, true
  );
```

#### append

```javascript
import {
  $,
  TAG_NAME_DIV
} from 'noliter';

$(TAG_NAME_DIV)
  .append(
    'text',
    document.createElement('div'),
    createDiv()
  );
```

#### events

```javascript
import {
  $,
  TAG_NAME_BUTTON,
  EVENT_TYPE_BLUR,
  EVENT_TYPE_FOCUS
} from 'noliter';

$(TAG_NAME_BUTTON)
  .append('click me')
  .events(
    EVENT_TYPE_BLUR, () => console.log('blur'),
    EVENT_TYPE_FOCUS, () => console.log('focus')
  );
```
