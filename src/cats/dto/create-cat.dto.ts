import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatDto {
  @Field(() => String, { description: 'name of the cat' })
  name: string;

  @Field(() => Int, { description: 'age of the cat' })
  age: number;

  @Field(() => String, { description: 'breed of the cat' })
  breed: string;
}
