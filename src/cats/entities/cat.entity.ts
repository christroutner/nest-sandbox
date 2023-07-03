import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  userId: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  // constructor({ name, age, breed }) {
  //   this.name = name;
  //   this.age = age;
  //   this.breed = breed;
  // }
}
