// Use strict mode
// Use a variable before being define returns an error
// Avoid to use keywords from new features in Javascript
// Does not allow you to delete variables and functions
// Does not leak out variables executed by eval.

function newCode() {
    "use strict"; //Use strict mode inside functions 
    var theVal = 0;

    // delete theVal;

    eval("var a = 1");
    console.log(a);

    // thVal = 1; //returns an error as the variable is not declared

    if (theVal > 0 ){
        console.log("Hello");
    }
        
}

newCode();

