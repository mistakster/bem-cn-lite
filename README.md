# bem-cn-lite

[![Build Status](https://travis-ci.org/mistakster/bem-cn-lite.svg?branch=master)](https://travis-ci.org/mistakster/bem-cn-lite)

Lite version of the friendly BEM-style class name generator, which is great for React

It’s a wrapper function for [bem-cn](https://github.com/albburtsev/bem-cn) module.

## Install

With Node.js:

```
npm install --save bem-cn-lite
```

## Usage

### Generator 

```js
import block from 'bem-cn-lite';

const b = block('button');
```

`b` is a class name generator that was bind to a `button`.
 
### Block

You can generate a block-level class name with function `b`.

If you provide an object as first argument, then it treats as modifiers for the block.

```js
// 'button'
b(); 
// 'button button_modifier'
b({ modifier: true });
// 'button button_modifier_value'
b({ modifier: 'value' });
```

### Element

First argument must be string. Second argument can be an object.

```js
// 'button__icon'
b('icon'); 
// 'button__icon button__icon_modifier'
b('icon', { modifier: true });
// 'button__icon button__icon_modifier_value'
b('icon', { modifier: 'value' }); 
```

### Mixin

Sometime, you might like to have a mixin on your block.

```js
// 'button mixin'
b(null, 'mixin');
// 'button button_modifier mixin'
b({ modifier: true }, 'mixin');
```

Also, mixin on element is welcome too.

```js
// 'button__icon mixin'
b('icon', 'mixin'); 
// 'button__icon button__icon_modifier mixin'
b('icon', {modifier: true}, 'mixin');
```

### Builder

It might you’d like to have an access to original methods of the `bem-cn`
generator in rare case.

```js
// 'block__icon is-loading icon'
b.builder()('icon').is({ 'loading': true }).mix('icon').toString();
```

### Custom settings

You can use alternative naming schemes for your BEM naming convention.
Just call static `setup()` method on `bem-cn-lite` module and `reset()`
to bring default back.

```js
import block from 'bem-cn-lite';

// Two Dashes style with namespaces
block.setup({
  ns: 'ns-',
  el: '__',
  mod: '--',
  modValue: '-'
});

const b = block('button');

// 'ns-button__icon ns-button__icon--modifier-value'
b('icon', { modifier: 'value' });

block.reset();

// 'button__icon button__icon_modifier'
b('icon', { modifier: true });
```

## Contributors

- [Vladimir Kuznetsov](https://github.com/mistakster)
- [Stanislav Eremenko](https://github.com/c01nd01r)
- [Roman Fedorenkov](https://github.com/SeqviriouM)

## License

MIT
