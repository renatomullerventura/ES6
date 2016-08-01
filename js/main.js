'use strict';

var USD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
var BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(1234123490871234.1234);

console.log(USD.format(1234123490871234.1234));
console.log(BRL);
