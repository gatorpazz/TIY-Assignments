/**
 *When you write a check, to validate the amount,
 *you have to write the English words for the amount
 *on a separate line. For example, a check for $123.45
 *has a line with:
 *
 *  onehundred twenty three and 45/100s dollars
 *
 *Given a function 'toEnglish' that accepts a Javascript
 * 'Number' and returns a 'String' formatted for use on a
 *check, as above.
 */
var expect = require('chai').expect;

function toEnglish(dollars, cents){
  var a;
  if ( dollars === 0 ){
    a = 'zero';
  }
  if ( dollars === 1 ){
    a = 'one';
  }
  if ( dollars === 2 ){
    a = 'two';
  }
  if ( dollars === 3 ){
    a = 'three';
  }
  if ( dollars === 4 ){
    a = 'four';
  }
  if ( dollars === 5 ){
    a = 'five';
  }
  if ( dollars === 6 ){
    a = 'six';
  }
  if ( dollars === 7 ){
    a = 'seven';
  }
  return a + ' dollars and ' + cents + '/100s dollars';
}

//Test cases here...
expect(toEnglish(0, 0)).to.equal('zero dollars and 0/100s dollars');
expect(toEnglish(1, 0)).to.equal('one dollars and 0/100s dollars');
expect(toEnglish(2, 0)).to.equal('two dollars and 0/100s dollars');
expect(toEnglish(3, 0)).to.equal('three dollars and 0/100s dollars');
expect()

