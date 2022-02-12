import { Product } from 'src/product/entities/product.entity';
import { customer } from '../../customer/entities/customer.entity';
export declare class Order {
    id: number;
    orderName: string;
    products: Product[];
    customer: customer;
}
