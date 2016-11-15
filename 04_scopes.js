'use strict';

// What are the different scopes in Javascript?

// Global scope
var a = 1;
window.a;

// Function scope
function moo() {
    var foo = 1;
}
console.log(foo);

// Variables are visible outside of the block scope
for(var i = 0; i < 5; i++){
    var j = i;
}
console.log(j);

// Variable hoisting? 
console.log(a);
var a = 1;

// Function hoisting 
// Only works with function declaterion
// Does not work with function expression

//Function declaration
foo();
function foo() {
    console.log('hi!');
}

// Function expression
foo();
var foo = function () {
    console.log('hi!');
}
// What happened is
var foo;
foo();
foo = function () {
    console.log('hi!');
}

// What is scope chain?
// The scope chain is a lexical scope
function foo() {
    console.log(myvar);
}
function goo() {
    var myvar =1;
    foo();
}
goo();

// What is an IIFE and why might use it?
(function () {
    var thing = {'hello':'main'};
    console.log('main: ', thing);
})();

'use strict';

// What are function closures?
// When a function returns a function it keeps reference of the 
// variables used in the function even when is already returned.

function sayHello(name){
    var text = 'Hello ' + name;
    return function() {
        console.log(text);
    }
}
sayHello('MyName')();

// Another example
var foo=[];
for (var i = 0; i < 10; i++){
    foo[i] = function() { return i};
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

// The way we expected to see: 0,1,2
var foo=[];
for (var i = 0; i < 10; i++){
    (function() {
      var y = i;
      foo[i] = function() { return y};  
    })();
}
console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());