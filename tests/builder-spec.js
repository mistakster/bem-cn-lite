"use strict";

require('should');

var generator = require('../index');

var b = generator('block');

describe('builder', function () {
  it('should exists in block', function () {
    b.should.have.property('builder').Function();

    var builder = b.builder();

    builder().should.equal('block');

  });

  it('should has more methods', function () {
    var builder = b.builder();

    builder.should.have.properties(['state', 'is', 'has', 'mix']);

    builder('icon').is({'loading': true}).mix('icon')()
      .should.equal('block__icon is-loading icon');
  })
});
