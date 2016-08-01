let number  =   123456.34;
let En  =   new Intl.NumberFormat('en-US').format(number);
let De  =   new Intl.NumberFormat('de-DE').format(number);
let Pt  =   new Intl.NumberFormat('Pt-Br').format(number);

console.log(En);
console.log(De);
console.log(Pt);