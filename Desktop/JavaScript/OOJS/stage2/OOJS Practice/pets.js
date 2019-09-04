const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// Dot Notation Usage
console.log(ernie.age);
console.log(ernie.breed);
ernie.bark();

// Bracket Notation Usage
console.log(ernie['age']);
console.log(ernie['breed']);
ernie['bark']();

// Using Brackets and variables to Access properties
let prop = 'breed';
console.log(ernie[prop]);

// adding and ammending property values using dot notation
ernie.age= 2;
ernie.color = 'black';
console.log(ernie);


// adding and ammending property values using bracket notation
ernie['age'] = 3;
ernie['color'] = 'white';
console.log(ernie);
