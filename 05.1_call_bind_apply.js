// What do the functions call, bind and apply do?
// The functions call, bind and apply are different ways to lockdown or 
// stabilizing the 'this' keywork
// The functions call, bind and apply are different ways to lockdown and 
// stabilizing the 'this' keywork

// Call
'use strict';
function a() {
    console.log(this);
}

a.call({});
a.call(1);

var a = {
    checkThis: function () {
        function checkOther () {
            console.log(this);
        }
        checkOther.call(this);
    }
}

a.checkThis();

function a(b,c,d) {
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);

}

a.call(1,2,3,4);
a.apply(1, [1,2,3]);

//apply
// use apply when you want to call a function that takes a variable number of parameters
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

var things = [1,2,3,4,53,2,4,5,6,1];
sum();

var x = sum.apply(null, things);
console.log(x);

//bind
//Only work with function expressions
//It is only applied to the object created
var a = function () {
  console.log(this);  
}.bind(1);

a();

