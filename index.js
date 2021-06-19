"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = {
    firstName: "Kishor",
    lastName: "Tiwari"
};
function getScore(student) {
    return `Score is ${student === null || student === void 0 ? void 0 : student.firstName}`;
}
function fucWithRestParams(...nums) {
    for (var i = 0; i < nums.length; i++) {
        console.log(i);
    }
}
function funcWithDefaultParam(num = 1) {
    console.log(`Passed in number: ${num}`);
}
var anonymousFunc = function (num1, num2) {
    return num1 + num2;
};
var funcDeclaredUsingFuncConstructor = new Function("a", "b", "return a + b");
// 4! -> 4 * 3! -> 4 * 3 * 2! -> 4 * 3 * 2 * 1 
var recursiveFunc = function (numb) {
    if (numb == 1)
        return 1;
    return numb * recursiveFunc(numb - 1);
};
// this function invokes itself using pair of parenthesis
// (function () {
//     var x = "Hello!!";
//     console.log(x)
// })();
// lamda expression
var lamdaExpression = (x) => console.log(`Passed number is: ${x}`);
// lamda statement - why? multiple statment or points to a block of code
var lamdaStatement = (x) => {
    console.log(`Passed number is: ${x}`);
};
var logParamTypeFunc = (x) => {
    if (typeof x == "number")
        console.log("x is number");
    if (typeof x == "string")
        console.log("x is a string");
    if (typeof x == "undefined")
        console.log("x is undefined");
    console.log(typeof x);
    console.log(x);
};
// Number
var n = new Number("2.0909");
console.log(n.toFixed()); // 2
console.log(n.toFixed(2)); // 2.09
console.log(n.toPrecision(6)); // 2.09090 --> keeps adding 0's if more or round if less than total length
console.log(n.valueOf()); // 2.0909 -> means this is not a NaN
var n2 = new Number("2xxx");
console.log(n2.valueOf()); // NaN
console.log(isNaN(n2.valueOf())); // true
//null and undefined are not the same. A variable initialized with undefined means that the variable has no 
//value or object assigned to it while null means that the variable has been set to an object whose value is 
//undefined.
//console.log(anonymousFunc(10,10));
//console.log(funcDeclaredUsingFuncConstructor(1,2))
//console.log(recursiveFunc(4))
//lamdaExpression(10);
//lamdaStatement(20);
//logParamTypeFunc(x);
// String
var s2 = "Hello world this is Kishor";
var s = new String("Hello world this is Kishor. Kishor loves fishing.");
console.log(s.charAt(1)); // e
console.log(s.charCodeAt(1)); // 101 -> unicode
console.log(s.concat(". I live in NZ.")); // Hello world this is Kishor. I live in NZ.
console.log(s.indexOf("Kishor")); // 20 
console.log(s.match("or"));
console.log(s.split(' ', 3)); // 3 is limit
// Regular exprn
//console.log(s.replace("Kishor", "Pramisha"))
//OR
var expr = /Kishor/gi; // -> gi groups in all the matches and replaces the value
console.log(s.replace(expr, "Pramisha"));
var expr2 = /(\w+)\+(\w+)/;
var str = "kishor+pramisha";
// here $2 means 2nd captured group, since there are two matches in this case
// $3 is not valid so it just prints the $3 as a value
var newstr = str.replace(expr2, "$2, $1, $3"); //pramisha, kishor, $3
// Arrays
var arr1 = [1, 2, 3];
var arr2 = new Array(3); // 3 is array size
var arr3 = new Array(1, 2, 3, 4); // 1,2,3,4 are array items
var arr = [];
for (var i = 0; i < 100; i++) {
    arr[i] = i + 1;
    console.log(arr.length);
}
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);