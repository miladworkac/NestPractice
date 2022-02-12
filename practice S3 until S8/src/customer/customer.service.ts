import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(customer)
    private readonly customerRepository: Repository<customer>,
  ) {}
  create(body: CreatecustomerDto) {
    const customer = this.customerRepository.create(body);
    return this.customerRepository.save(customer);
  }

  findAll() {
    return this.customerRepository.find({
      relations: ['orders'],
    });
  }

  findOne(id: number) {
    return this.customerRepository.findOne(id);
  }

  async update(id: number, body: UpdatecustomerDto) {
    const customer = await this.customerRepository.preload({
      id: id,
      ...body,
    });
    if (!customer) {
      throw new NotFoundException();
    }
    return this.customerRepository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    this.customerRepository.remove(customer);
    return customer;
  }
}
