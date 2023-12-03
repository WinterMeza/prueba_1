import { InputType, Int, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsPositive } from "class-validator";

@InputType()
export class CreateProductInput {

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    code_erp: string;

    @Field()
    @IsNotEmpty()
    tipo_item: string;

    @Field()
    @IsNotEmpty()
    tipo_envase: string;

    @Field()
    @IsNotEmpty()
    liquido_coberturas: string;

    @Field(() => Int)
    @IsPositive()
    unidades_cajas: number;

    @Field()
    @IsNotEmpty()
    especie: string;

    @Field(() => Int)
    @IsPositive()
    peso_neto: number;

    @Field(() => Int)
    @IsPositive()
    peso_drenado: number;

    @Field(() => Boolean)
    @IsNotEmpty()
    status: true;
}
