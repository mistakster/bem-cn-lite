"use strict";

var { setup } = require('bem-cn');

var bemClassName = setup();

function bemClassNameLite(blockName) {
  var b = bemClassName(blockName);

  function element(elementName, modifiers, mixin) {
    if (typeof elementName !== 'string' || typeof elementName === 'string' && typeof modifiers === 'string') {
      mixin = modifiers;
      modifiers = null;
    }

    var result = b(elementName, modifiers);

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
  bemClassName = setup(config);
};

bemClassNameLite.reset = function () {
  bemClassName = setup();
};

module.exports = bemClassNameLite;
