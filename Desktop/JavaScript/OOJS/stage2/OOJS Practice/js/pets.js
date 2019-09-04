const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

const vera = {
    animal: 'dog',
    age: 8,
    breed: 'Border Collie',
    bark: function(){
        console.log('Woof!');
    }
}

const scofield = {
    animal: 'dog',
    age: 6,
    breed: 'Doberman',
    bark: function(){
        console.log('Woof!');
    }
}

const edel = {
    animal: 'dog',
    age: 7,
    breed: 'German Shothaired Pointer',
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

// accessing string values inside object literals
const myString = {
	string: "Strings are easy to manipulate.",
	countWords: function(){
		const wordArray = this.string.split(' ');
		return wordArray.length;
	}
}

myString.string = "I manipulated this string using JS."

myString.characters = myString.string.length;

var numWords = myString.countWords();
