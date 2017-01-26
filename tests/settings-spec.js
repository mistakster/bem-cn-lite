"use strict";

require('should');

var generator = require('../index');

describe('Config', function () {
  var config = {
    ns: 'ns-',
    el: '~~',
    mod: '--',
    modValue: '-'
  };

  it('should set custom settings', function () {

    var b = generator('block')
    b.setup(config);

    b().toString().should.equal('ns-block');

    b({ mod: 'value' }).toString().should.equal('ns-block ns-block--mod-value');

    b({ mod: true }).toString().should.equal('ns-block ns-block--mod');

    b(false, 'mix').toString().should.equal('ns-block mix');

    b('element').toString().should.equal('ns-block~~element');

    b('element', { mod: 'value' }).toString().should.equal('ns-block~~element ns-block~~element--mod-value');

    b('element', { mod: true }).toString().should.equal('ns-block~~element ns-block~~element--mod');

    b('element', 'mix').toString().should.equal('ns-block~~element mix');

    b.reset();
  });

});
