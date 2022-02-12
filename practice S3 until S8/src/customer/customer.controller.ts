import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CustomerService } from './customer.service';

@Controller('customer')
export class customerController {
  constructor(
    @InjectRepository(customer)
    private readonly customerRepository: Repository<customer>,
    private readonly customerService: CustomerService,
  ) {}

  @Post()
  create(@Body() createcustomerDto: CreatecustomerDto) {
    return this.customerService.create(createcustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatecustomerDto: UpdatecustomerDto,
  ) {
    return this.customerService.update(+id, updatecustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
