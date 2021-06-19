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
var recursiveFuncFactorial = function (numb) {
    if (numb == 1 || numb == 0)
        return numb;
    return numb * recursiveFuncFactorial(numb - 1);
};
var recursiveFuncSum = function (numb) {
    if (numb == 1 || numb == 0)
        return numb;
    return numb + recursiveFuncSum(numb - 1);
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
var s2 = "Hello world this is Bob";
var s = new String("Hello world this is Bob. Bob loves fishing.");
console.log(s.charAt(1)); // e
console.log(s.charCodeAt(1)); // 101 -> unicode
console.log(s.concat(". I live in NZ.")); // Hello world this is Bob. I live in NZ.
console.log(s.indexOf("Bob")); // 20 
console.log(s.match("or"));
console.log(s.split(' ', 3)); // 3 is limit
// Regular exprn
//console.log(s.replace("Bob", "Alice"))
//OR
var expr = /Bob/gi; // -> gi groups in all the matches and replaces the value
console.log(s.replace(expr, "Alice"));
var expr2 = /(\w+)\+(\w+)/;
var str = "Bob+Alice";
// here $2 means 2nd captured group, since there are two matches in this case
// $3 is not valid so it just prints the $3 as a value
var newstr = str.replace(expr2, "$2, $1, $3"); //Alice, Bob, $3
// Arrays
var arr1 = [1, 2, 3];
var arr2 = new Array(3); // 3 is array size
var arr3 = new Array(1, 2, 3, 4); // 1,2,3,4 are array items
var arr = new Array(100); // do not initialise to [] empty array. it will slow down when inserting item(s) 
for (var i = 0; i < 100; i++)
    arr[i] = i + 1;
// Destructuring
var arr10 = [12, 13];
var [x, y] = arr10; // x = 12, y = 13
// arr.push(0); returns length of the an array
// arr.pop(); //delets and returns last element of the array
// arr.reverse(); // reverses the ordering of the array, [1,2,3] => [3,2,1]
// arr.shift(); // removes first element
// arr.unshift(); // adds the item to the first position of an array
// arr.sort(); sorts the array items in ascending order, also can pass a delegate that determines the ordering
if (arr.every((el, _) => el < 101))
    console.log("Every element is below 100.");
// returns true if one of the item satisfies the condition.
console.log(arr.some((el, idx) => el == 100));
var arr_even = arr.filter((val, idx) => val % 2 == 0);
arr_even.forEach((val, idx) => console.log(val));
if (arr.indexOf(101) == -1) // returns -1 if the item is not found in the array
    console.log("Item doesn't exist");
var arr_multiply_2 = arr.map((val, idx) => val * 2); // returns 1, 4, 6 ... so on
console.log(arr_multiply_2.join(',')); // , is separator
// reduce takes 2 params, returned value of the callback function replaces the 1st param(prev), and curr is the current value
// in the loop
// default behavior is left to right, for right to left use reduceRight
var reduceResult = [1, 2, 3].reduce((prev, curr, idx) => {
    console.log(prev);
    return prev + curr;
});
console.log(reduceResult);
// For fun: calculate sum of the preceeding numbers for each item in an array using map
// 1,2,3 => 1, 3, 6
var arr4 = [1, 2, 3];
var preceedingSum = 0;
var result = arr4.map((val, idx) => {
    if (idx != 0)
        preceedingSum += arr4[idx - 1];
    return val + preceedingSum;
});
//result.forEach((v, i) => console.log(v))
