import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the cat' })
  userId: string;

  @Column()
  @Field(() => String, { description: 'name of the cat' })
  name: string;

  @Column()
  @Field(() => Int, { description: 'Age of the cat' })
  age: number;

  @Column()
  @Field(() => String, { description: 'breed of the cat' })
  breed: string;

  // constructor({ name, age, breed }) {
  //   this.name = name;
  //   this.age = age;
  //   this.breed = breed;
  // }
}
