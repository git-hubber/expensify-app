console.log("Destructuring");


const person = {
  name: 'Martin',
  age: 40,
  location: {
    city: 'Melbourne',
    temp: 20
  }
}

const { name = "Bob", age, location: { city, temp } } = person;

console.log(`${name} is ${age} and in ${city}`);

const book = {
  title: "some book",
  author: "Someone",
  publisher: {
    name: "some publisher"
  }
}

const {
  publisher: {
    name: publisherName = "Self-published"
  }
} = book;

console.log(publisherName);

const address = ['20 elm grove', 'Richmond', 'Victoria', '3121'];

const [
  , , state = "Vic",
] = address;

console.log(`${state}`);