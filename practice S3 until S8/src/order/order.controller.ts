import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @Post()
  insert(@Body() body: CreateOrderDto) {
    return this.OrderService.create(body);
  }

  @Get()
  findAll() {
    return this.OrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.OrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateOrderDto: UpdateOrderDto) {
    return this.OrderService.update(+id, UpdateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.OrderService.remove(+id);
  }
}
