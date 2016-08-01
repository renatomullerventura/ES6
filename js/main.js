'use strict';

var number = 123456.34;
var En = new Intl.NumberFormat('en-US').format(number);
var De = new Intl.NumberFormat('de-DE').format(number);
var Pt = new Intl.NumberFormat('Pt-Br').format(number);

console.log(En);
console.log(De);
console.log(Pt);
