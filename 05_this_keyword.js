// In javascript 'this' is determined by the calling context, 
// is determined by the way the function is called

console.log(this);

this.a = 1;
console.log(this.a);
console.log(window.a);
console.log(a);

function checkThis() {
    console.log(this);
}
checkThis();

var a = {
    checkThis: function() {
        console.log(this);
    }
};

a.checkThis();

var func = a.checkThis;
func();

var a = {
    checkThis: function() {
        console.log(this); //prints the 'a' object

        function checkOther() {
            console.log(this); //prints the window object
        }

        checkOther();
    }
};

a.checkThis();

// Fixing the 'this' word in the example above
var a = {
    checkThis: function() {
        var self = this;
        console.log(this); //prints the 'a' object

        function checkOther() {
            console.log(self);
            self.moo = 1; //prints the window object
        }

        checkOther();

        console.log(self.moo);
    }
};
a.checkThis();
