import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(body: CreateOrderDto) {
    const order = this.orderRepository.create(body);
    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['products'],
    });
  }

  findOne(id: number) {
    return this.orderRepository.findOne(id, {
      relations: ['products'],
    });
  }

  async update(id: number, body: UpdateOrderDto) {
    const order = await this.orderRepository.preload({
      id: id,
      ...body,
    });
    if (!order) {
      throw new NotFoundException();
    }
    return this.orderRepository.save(order);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    this.orderRepository.remove(order);
    return order;
  }
}
