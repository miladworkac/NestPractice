import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly OrderService;
    constructor(OrderService: OrderService);
    insert(body: CreateOrderDto): Promise<import("./entities/order.entity").Order[]>;
    findAll(): Promise<import("./entities/order.entity").Order[]>;
    findOne(id: any): Promise<import("./entities/order.entity").Order>;
    update(id: string, UpdateOrderDto: UpdateOrderDto): Promise<import("./entities/order.entity").Order>;
    remove(id: string): Promise<import("./entities/order.entity").Order>;
}
