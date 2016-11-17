'use strict';

//Constructor OO pattern
// Pseudo-constructor classical class
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
    this.full_name = function() {
        return this.first_name + ' ' + this.last_name;
    };
};

Person.prototype.full_name_prototype = function () {
    return this.first_name + ' ' + this.last_name;
};

var dude =  new Person('Mike', 'Smith');
console.log(dude.full_name_prototype());

//Inheritance in pseudo constructor class
function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
};

Person.prototype.full_name = function () {
    return this.first_name + ' ' + this.last_name;
};

function Professional(honorific, first_name, last_name) {
     Person.call(this, first_name, last_name);
     this.honorific = honorific;
};

Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function () {
    return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
};

var prof = new Professional('Dr.', 'Mike', 'Smith');
console.log(prof.professional_name());
console.log(prof.full_name());