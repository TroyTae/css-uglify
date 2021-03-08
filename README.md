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

Instead of literal, if you use constant, you can reduce your file size.  
Please setting about uglify, then your constants will change to single alphabet.  
Here's the [supported constants](./src/Constant.ts).

### DOM manipulation

#### get/set

You can get/set property of DOM with `get`/`set` method.

```javascript
import {
  $,
  TAG_NAME_INPUT,
  PROP_CHECKED,
  PROP_DISABLED
} from 'noliter';

const input = $(TAG_NAME_INPUT)
  .set(
    PROP_CHECKED, true,
    PROP_DISABLED, true
  );

div.get(PROP_CHECKED) === true;
div.get(PROP_DISABLED) === true;
```

#### add

This method appends multiple parameters as children.  
You can pass `string` or `element` or `instance`.  

```javascript
import {
  $,
  TAG_NAME_DIV
} from 'noliter';

$(TAG_NAME_DIV)
  .add(
    'text',
    document.createElement('div'),
    $(TAG_NAME_DIV)
  );
```

#### on

It's same with `addEventListener` method.

```javascript
import {
  $,
  TAG_NAME_BUTTON,
  EVENT_TYPE_BLUR,
  EVENT_TYPE_FOCUS
} from 'noliter';

$(TAG_NAME_BUTTON)
  .add('click me')
  .on(
    EVENT_TYPE_BLUR,
    () => console.log('blur')
  )
  .on(
    EVENT_TYPE_FOCUS,
    () => console.log('focus'),
    { passive: true }
  );
```
