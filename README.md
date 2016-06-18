# bem-cn-lite

Lite version of the friendly BEM-style class name generator, which is great for React

It’s a wrapper function for [bem-cn](https://github.com/albburtsev/bem-cn) module.

## Install

With Node.js:

```
npm i --save bem-cn-lite
```

## Usage

### Generator 

```js
var block = require('bem-cn-lite');

var b = block('button');
```

`b` is a class name generator which was bind to `button`.
 
### Block

You can generate block-level class name with function `b`.

If you provide an object as first argument, then it treats as modifiers for the block.

```js
// 'button'
b(); 
// 'button button_modifier'
b({modifier: true});
// 'button button_modifier_value'
b({modifier: 'value'});
```

### Element

First argument must be string. Second argument can be an object.

```js
// 'button__icon'
b('icon'); 
// 'button__icon button__icon_modifier'
b('icon', {modifier: true});
// 'button__icon button__icon_modifier_value'
b('icon', {modifier: 'value'}); 
```

### Mixin

Sometime, you might like to have a mixin on your block.

```js
// 'button mixin'
b(false, 'mixin');
// 'button button_modifier mixin'
b({modifier: true}, 'mixin');
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
// 'block__icon icon is-loading'
b.builder()('icon').is({'loading': true}).mix('icon')()
```