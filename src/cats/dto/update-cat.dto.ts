import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCatDto extends PartialType(CreateCatDto) {
  @Field(() => String)
  userId: string;
}
