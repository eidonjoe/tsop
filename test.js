var index = require('./index');
var should = require('should');

describe('test.js', function () {
  it(' mix == false or no mix parameter');

  it('should return weak when password === 111111', function () {
    index.verify('111111').should.equal('weak');
  });
  it('should return weak when password === qweqwe', function () {
    index.verify('qweqwe').should.equal('weak');
  });
  it('should return middle when password === 123123123123', function () {
    index.verify('123123123123').should.equal('middle');
  });
  it('should return middle when password === 123qwe', function () {
    index.verify('123qwe').should.equal('middle');
  });
  it('should return strong when password === 123qwe!@#', function () {
    index.verify('123qwe!@#').should.equal('strong');
  });
  it('mix == true');
  it('should return disable when password === 111111', function () {
    index.verify('111111',true).should.equal('disable');
  });
  it('should return disable when password === qweqwe', function () {
    index.verify('qweqwe',true).should.equal('disable');
  });
  it('should return weak when password === !@#!@#', function () {
    index.verify('!@#!@#',true).should.equal('weak');
  });
  it('should return middle when password === qwe!@#', function () {
    index.verify('qwe!@#',true).should.equal('middle');
  });
  it('should return middle when password === 123qwe', function () {
    index.verify('123qwe',true).should.equal('middle');
  });
  it('should return strong when password === 123qwe!@#', function () {
    index.verify('123qwe!@#',true).should.equal('strong');
  });
});