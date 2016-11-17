//Prototype OO pattern

'use strict';

var Person = {
    full_name: function () {
        return this.first_name + ' ' + this.last_name;
    }
}
 
function PersonFactory(first_name, last_name){
    var person = Object.create(Person);
    person.first_name = first_name;
    person.last_name = last_name;
}

var asim = PersonFactory("Mike", "Smith");

console.log(mike.full_name());