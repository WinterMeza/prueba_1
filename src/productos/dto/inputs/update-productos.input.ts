import { CreateProductInput } from "./create-productos.input";
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}



