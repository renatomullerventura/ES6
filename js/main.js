"use strict";

/*function test(valueA){
    var valueB  =   arguments.length <= 1 || arguments[1] === undefined? 4:arguments[1];
    return valueA + valueB;
}
*/

function test(valueA) {
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

    return valueA + valueB;
}

console.log(test(8));
