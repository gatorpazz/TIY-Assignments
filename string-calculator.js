var expect = require('chai').expect;

function toEnglish(word){
  if ( word === 'zero' ) {
    return 0;
  }
  if ( word === 'one' ) {
    return 1;
  }
  if ( word === 'two' ) {
    return 2;
  }
  if ( word === 'three' ) {
    return 3;
  }
  if ( word === 'four' ) {
    return 4;
  }
  if ( word === 'five' ) {
    return 5;
  }
  if ( word === 'six' ) {
    return 6;
  }
  if ( word === 'seven' ) {
    return 7;
  }
  if ( word === 'eight' ) {
    return 8;
  }

function plus(x, y){
  var a = toEnglish(x);
  var b = toEnglish(y);
  return a + b;
}
