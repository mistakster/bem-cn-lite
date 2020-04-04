"use strict";

require('should');

const generator = require('../build').default;

describe('config', function () {
  const config = {
    ns: 'ns-',
    el: '~~',
    mod: '--',
    modValue: '-'
  };

  it('should set custom settings', function () {

    generator.setup(config);

    const b = generator('block');

    b().toString().should.equal('ns-block');

    b({mod: 'value'}).toString().should.equal('ns-block ns-block--mod-value');

    b({mod: true}).toString().should.equal('ns-block ns-block--mod');

    b(null, 'mix').toString().should.equal('ns-block mix');

    b('element').toString().should.equal('ns-block~~element');

    b('element', {mod: 'value'}).toString().should.equal('ns-block~~element ns-block~~element--mod-value');

    b('element', {mod: true}).toString().should.equal('ns-block~~element ns-block~~element--mod');

    b('element', 'mix').toString().should.equal('ns-block~~element mix');

    generator.reset();
  });

  it('should reset custom settings', function () {

    generator.setup(config);

    generator.reset();

    const b = generator('block');

    b().toString().should.equal('block');

    b({mod: 'value'}).toString().should.equal('block block_mod_value');

    b({mod: true}).toString().should.equal('block block_mod');

    b(null, 'mix').toString().should.equal('block mix');

    b('element').toString().should.equal('block__element');

    b('element', {mod: 'value'}).toString().should.equal('block__element block__element_mod_value');

    b('element', {mod: true}).toString().should.equal('block__element block__element_mod');

    b('element', 'mix').toString().should.equal('block__element mix');
  });

});
