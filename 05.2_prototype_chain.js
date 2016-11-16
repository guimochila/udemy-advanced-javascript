var animal = {
    kind: 'human'
};

console.log(animal);

//var a = {}
//a.__proto__ = animal;

var a = Object.create(animal, {food: {value: 'mango'}}); // Recommended use

console.log(a.kind);
console.log(animal.isPrototypeOf(a));

a.kind = 'igloo';
console.log(a.kind);
console.log(animal.kind);

console.log(a);