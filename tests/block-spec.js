"use strict";

require('should');

const generator = require('../build').default;

const b = generator('block');

describe('module', function () {
  it('should generate block', function () {
    var block = b();

    block.should.equal('block');
  });

  it('should generate block with modifier', function () {
    const block = b({modifier: true});

    block.should.equal('block block_modifier');
  });

  it('should generate block with modifier and value', function () {
    const block = b({modifier: 'value'});

    block.should.equal('block block_modifier_value');
  });

  it('should generate block with mixin', function () {
    const block = b(null, 'mixin');

    block.should.equal('block mixin');
  });

  it('should generate block with mixin if an empty object is provided as modifiers', function () {
    const block = b({}, 'mixin');

    block.should.equal('block mixin');
  });

  it('should generate block with modifier and mixin', function () {
    const block = b({modifier: 'value'}, 'mixin');

    block.should.equal('block block_modifier_value mixin');
  });
});
