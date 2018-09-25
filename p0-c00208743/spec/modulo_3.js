var path = require('path');
var expect = require('chai').expect;

var modulo_3 = require(path.join(__dirname, '..', './modulo_3.js'));

describe('modulo_3', function () {
  'use strict';

  it('exists', function () {
    expect(modulo_3).to.be.a('function');

  });

  it('get modulo 3', function () {
    expect(11).to.equal(2);
  });

  it('get modulo 3', function () {
    expect(9).to.equal(0);
  });

  it('get modulo 3', function () {
    expect(10).to.equal(1);
  });

  it('get modulo 3', function () {
    expect(4).to.equal(1);
  });

  it('get modulo 3', function () {
    expect(5).to.equal(2);
  });


  // Add more assertions here
});
