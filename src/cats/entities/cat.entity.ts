// interface Cat {
//   name: string,
//   age: number,
//   breed: string
// }

export class Cat {
  name: string;
  age: number;
  breed: string;

  constructor({ name, age, breed }) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
