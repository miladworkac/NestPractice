import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer])],
  controllers: [customerController],
  providers: [CustomerService],
})
export class customerModule {}
