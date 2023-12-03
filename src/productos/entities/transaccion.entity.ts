import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import mongoose from 'mongoose';
import { Product } from './productos.entity';

@ObjectType()
@Schema()
export class Transaccion extends Document {
  @Field(() => Int)
  @Prop()
  monto: number;

  @Field(() => ID)
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  producto: Product;
}

export const TransaccionSchema = SchemaFactory.createForClass(Transaccion);