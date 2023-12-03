import { Module } from '@nestjs/common';
import { ProductService } from './productos.service';
import { ProductResolver } from './productos.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/productos.entity'
import { Transaccion, TransaccionSchema } from './entities/transaccion.entity';

@Module({
  providers: [ProductService, ProductResolver],
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Transaccion.name, schema: TransaccionSchema }
    ])
  ],
  exports: [ProductService, MongooseModule],
})
export class ProductsModule { }
