import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(body: CreateProductDto) {
    const product = this.productRepository.create(body);
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne(id);
  }

  async update(id: number, body: UpdateProductDto) {
    const prodcuct = await this.productRepository.preload({
      id: id,
      ...body,
    });
    if (!prodcuct) {
      throw new NotFoundException();
    }
    return this.productRepository.save(prodcuct);
  }

  async remove(id: number) {
    const prodcuct = await this.findOne(id);
    this.productRepository.remove(prodcuct);
    return prodcuct;
  }
}
