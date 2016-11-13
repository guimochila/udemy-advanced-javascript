// Does javascript pass variables by reference or by value
// Primitive types such as strings, numbers, booleans are passed by values
// Objects are passed by reference

"use strict";

//Passing by value

var a = 1;
function foo(a) {
    a = 2;
}
foo(a);
console.log(a);

//Passing by reference

var b = {'too':'boo'};
function moo(b) {
    b = {'boo':'too'};
}
moo(b);
console.log(b);