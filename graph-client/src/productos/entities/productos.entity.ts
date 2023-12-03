import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Transaccion } from './transaccion.entity';

@ObjectType()
@Schema()
export class Product extends Document {

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    code_erp: string;

    @Field()
    @Prop()
    tipo_item: string;

    @Field()
    @Prop()
    tipo_envase: string;

    @Field()
    @Prop()
    liquido_coberturas: string;

    @Field(() => Int)
    @Prop()
    unidades_cajas: number;

    @Field()
    @Prop()
    especie: string;

    @Field(() => Int)
    @Prop()
    peso_neto: number;
    
    @Field()
    @Prop(()=>Int)
    peso_drenado: number;
    
    @Field(()=>Boolean)
    @Prop()
    status: true;

    @Field(() => [Transaccion], { nullable: true })
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaccion' }] })
    transacciones?: Types.Array<Transaccion>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
