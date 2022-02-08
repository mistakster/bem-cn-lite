"use strict";

require('should');

const generator = require('../lib').default;

const b = generator('block');

describe('module', function () {
  it('should generate element', function () {
    const element = b('element');

    element.should.equal('block__element');
  });

  it('should generate element with modifier', function () {
    const element = b('element', { modifier: true });

    element.should.equal('block__element block__element_modifier');
  });

  it('should generate element with modifier and value', function () {
    const element = b('element', { modifier: 'value' });

    element.should.equal('block__element block__element_modifier_value');
  });

  it('should generate element with mixin', function () {
    const element = b('element', 'mixin');

    element.should.equal('block__element mixin');
  });

  it('should generate element with mixins', function () {
    const element = b('element', ['mixin', 'nixim']);

    element.should.equal('block__element mixin nixim');
  });

  it('should generate element with modifier and mixin', function () {
    const element = b('element', { modifier: 'value' }, 'mixin');

    element.should.equal('block__element block__element_modifier_value mixin');
  });

  it('should generate element with modifier and mixins', function () {
    const element = b('element', { modifier: 'value' }, ['mixin', 'nixim']);

    element.should.equal('block__element block__element_modifier_value mixin nixim');
  });
});
