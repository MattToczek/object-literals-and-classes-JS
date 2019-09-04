class Pet {
  constructor(animal, age, breed, sound) {
    this.animal=animal;
    this.age=age;
    this.breed=breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    let hour = today.getHours();

    if (hour > 9 && hour <= 10 || hour > 17 && hour <= 18) {
      return 'eating';
    }
    else if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  get owner() {
    return this._owner
  }

  set owner(owner){
    this._owner = owner;
    console.log('setter called: ' + owner);
  }

  speak(){
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'Pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman', 'grrrrrrrr');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer', 'bork bork');

ernie.owner = 'Ashley';
console.log(ernie.owner);

// Dot Notation Usage
console.log(ernie.age);
console.log(ernie.breed);
console.log(ernie.activity);


// Bracket Notation Usage
console.log(ernie['age']);
console.log(ernie['breed']);


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
