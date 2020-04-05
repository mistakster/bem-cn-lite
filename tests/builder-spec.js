"use strict";

require('should');

const generator = require('../lib').default;

const b = generator('block');

describe('builder', function () {
  it('should exists in block', function () {
    b.should.have.property('builder').Function();

    const builder = b.builder();

    builder().should.equal('block');

  });

  it('should has more methods', function () {
    const builder = b.builder();

    builder.should.have.properties(['state', 'is', 'has', 'mix']);

    builder('icon').is({'loading': true}).mix('icon').toString()
      .should.equal('block__icon is-loading icon');
  })
});
