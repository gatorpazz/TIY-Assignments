var expect = require('chai').expect;

function toNumber(word){
  if( word === 'zero' ){
    return 0;
  }
  if( word === 'one' ){
    return 1;
  }
  if( word === 'two' ){
    return 2;
  }
  if( word === 'three' ){
    return 3;
  }
  if( word === 'four' ){
    return 4;
  }
  if( word === 'five' ){
    return 5;
  }
  if( word === 'six' ){
    return 6;
  }
  if( word === 'seven' ){
    return 7;
  }
  if( word === 'eight' ){
    return 8;
  }
  if( word === 'nine' ){
    return 9;
  }
}

function plus(x, y){
  var a = toNumber(x);
  var b = toNumber(y);
  return a + b;
}

expect(toNumber).to.exist;
expect(toNumber('zero')).to.equal(0);
expect(toNumber('one')).to.equal(1);
expect(toNumber('two')).to.equal(2);
expect(toNumber('three')).to.equal(3);
expect(toNumber('four')).to.equal(4);
expect(toNumber('five')).to.equal(5);
expect(toNumber('six')).to.equal(6);
expect(toNumber('seven')).to.equal(7);
expect(toNumber('eight')).to.equal(8);
expect(toNumber('nine')).to.equal(9);

expect(plus('zero', 'zero')).to.equal(0);
expect(plus('zero', 'one')).to.equal(1);
expect(plus('zero', 'two')).to.equal(2);
expect(plus('zero', 'three')).to.equal(3);
expect(plus('zero', 'four')).to.equal(4);
expect(plus('zero', 'five')).to.equal(5);
expect(plus('zero', 'six')).to.equal(6);
expect(plus('zero', 'seven')).to.equal(7);
expect(plus('zero', 'eight')).to.equal(8);
expect(plus('zero', 'nine')).to.equal(9);
