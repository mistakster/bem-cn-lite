"use strict";

var bemClassName = require('bem-cn').default;

module.exports = function (blockName) {
  var b = bemClassName(blockName);

  function element(elementName, modifiers, mixin) {
    // normalize arguments
    if (typeof elementName === 'string') {
      // going to create an element
      if (typeof modifiers === 'string') {
        mixin = modifiers;
        modifiers = null;
      }
    } else {
      // going to create a block
      mixin = modifiers;
      modifiers = null;
    }

    var result = b(elementName, modifiers);

    return (mixin ? result.mix(mixin) : result).toString();
  }

  element.builder = function () {
    return b;
  };

  return element;
};
