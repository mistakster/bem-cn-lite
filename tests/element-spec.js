"use strict";

require('should');

var generator = require('../index');

var b = generator('block');

describe('module', function () {
  it('should generate element', function () {
    var element = b('element');

    element.should.equal('block__element');
  });

  it('should generate element with modifier', function () {
    var element = b('element', {modifier: true});

    element.should.equal('block__element block__element_modifier');
  });

  it('should generate element with modifier and value', function () {
    var element = b('element', {modifier: 'value'});

    element.should.equal('block__element block__element_modifier_value');
  });

  it('should generate element with mixin', function () {
    var element = b('element', 'mixin');

    element.should.equal('block__element mixin');
  });

  it('should generate element with modifier and mixin', function () {
    var element = b('element', {modifier: 'value'}, 'mixin');

    element.should.equal('block__element block__element_modifier_value mixin');
  });
});
