/* What are the different types in javascript?

Primitives types:

Boolean
Number
String
Null -> defined by a programmer
Undefined -> Unitialized variable or not unkown property of an object

Non-primitive:

Objects
*/

var a = 'moo';
typeof(a);
a = 1;
typeof(a);

var b = null;
console.log(b);

// What's the difference between == and ===?
// === strict equality operator, check the value and type
// == do the type coercion.

//NaN - Not a number
//NaN always returns false compared with anything
typeof(NaN);
"abc"/4;
isNaN(NaN);