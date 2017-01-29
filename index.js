"use strict";

var bemClassName = require('bem-cn');

function bemClassNameLite(blockName) {
  var b = bemClassName(blockName);

  function element(elementName, modifiers, mixin) {
    var result = b(elementName);

    if (typeof elementName !== 'string' || typeof elementName === 'string' && typeof modifiers === 'string') {
      mixin = modifiers;
      modifiers = null;
    }

    if (modifiers) {
      result = result(modifiers);
    }

    if (mixin) {
      result = result.mix(mixin);
    }

    return result.toString();
  }

  element.builder = function () {
    return b;
  };

  return element;
}

bemClassNameLite.setup = function (config) {
  bemClassName.setup(config);
};

bemClassNameLite.reset = function () {
  bemClassName.reset();
};

module.exports = bemClassNameLite;
