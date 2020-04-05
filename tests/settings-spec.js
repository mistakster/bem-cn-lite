"use strict";

require('should');

const generator = require('../lib').default;

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

    b().should.equal('ns-block');

    b({ mod: 'value' }).should.equal('ns-block ns-block--mod-value');

    b({ mod: true }).should.equal('ns-block ns-block--mod');

    b(null, 'mix').should.equal('ns-block mix');

    b('element').should.equal('ns-block~~element');

    b('element', { mod: 'value' }).should.equal('ns-block~~element ns-block~~element--mod-value');

    b('element', { mod: true }).should.equal('ns-block~~element ns-block~~element--mod');

    b('element', 'mix').should.equal('ns-block~~element mix');

    generator.reset();
  });

  it('should reset custom settings', function () {
    generator.setup(config);

    generator.reset();

    const b = generator('block');

    b().should.equal('block');

    b({ mod: 'value' }).should.equal('block block_mod_value');

    b({ mod: true }).should.equal('block block_mod');

    b(null, 'mix').should.equal('block mix');

    b('element').should.equal('block__element');

    b('element', { mod: 'value' }).should.equal('block__element block__element_mod_value');

    b('element', { mod: true }).should.equal('block__element block__element_mod');

    b('element', 'mix').should.equal('block__element mix');
  });
});
