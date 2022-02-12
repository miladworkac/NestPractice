import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly productRepository;
    constructor(orderRepository: Repository<Order>, productRepository: Repository<Product>);
    create(body: CreateOrderDto): Promise<Order[]>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, body: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<Order>;
}
