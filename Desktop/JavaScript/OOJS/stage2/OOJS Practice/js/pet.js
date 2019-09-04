class Pet {
  constructor(animal, age, breed, sound) {
    this.animal=animal;
    this.age=age;
    this.breed=breed;
    this.sound = sound;
  }

  speak(){
    console.log(this.sound);
  }
}

const ernie = new Pet('dog', 1, 'Pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
const scofield = new Pet('dog', 6, 'Doberman', 'grrrrrrrr');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer', 'bork bork');

console.log(ernie);
