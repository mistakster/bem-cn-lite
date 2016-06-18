"use strict";

require('should');

var generator = require('../index');

var b = generator('block');

describe('block', function () {
  it('should has builder', function () {
    b.should.have.property('builder').Function();

    var builder = b.builder();

    builder().should.eql('block');

    builder.should.have.properties(['state', 'is', 'has', 'mix']);
  });
});
