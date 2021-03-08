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

### Notifier

```javascript
import { $, notifier, INPUT } from 'noliter';

const [setValue, addValueListener] = notifier();
const input1 = $(INPUT);
const input2 = $(INPUT);
addValueListener((value) => input1.value = value);
addValueListener((value) => input2.value = value);
setValue('');
setValue('some value');
```

### DOM manipulation

#### get/set

You can get/set property of DOM with `get`/`set` method.

```javascript
import { $, INPUT, CHECKED, DISABLED } from 'noliter';

const input = $(INPUT).set(
  CHECKED, true,
  DISABLED, true
);

input.get(CHECKED) === true;
input.get(DISABLED) === true;
```

#### add

This method appends multiple parameters as children.  
You can pass `string` or `element` or `instance`.  

```javascript
import { $, DIV } from 'noliter';

$(DIV)
  .add(
    'text',
    document.createElement('div'),
    $(DIV)
  );
```

#### on

It's same with `addEventListener` method.

```javascript
import { $, BUTTON, BLUR, FOCUS } from 'noliter';

$(BUTTON)
  .add('click me')
  .on(BLUR, () => console.log('blur'))
  .on(
    FOCUS,
    () => console.log('focus'),
    { passive: true }
  );
```
