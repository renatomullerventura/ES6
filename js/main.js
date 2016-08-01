"use strict";

var US = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" });
var BR = new Intl.DateTimeFormat('pt-BR', { year: "numeric", month: "long", day: "numeric" });
var DE = new Intl.DateTimeFormat('de-DE', { year: "numeric", month: "long", day: "numeric" });
//new Intl.DateTimeFormat("en-US", {weekday: "long", year: "numeric", month: "long", day: "numeric"}).format(Date.now());

console.log(US.format(Date.now()));
console.log(BR.format(Date.now()));
console.log(DE.format(Date.now()));
