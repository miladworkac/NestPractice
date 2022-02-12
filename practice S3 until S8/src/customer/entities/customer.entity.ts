import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  statuse: string;
  // @ManyToMany((type) => Product, (Product) => Product.customers)
  // @JoinTable()
  // products: string[];

  @OneToMany((type) => Order, (order) => order.customer)
  orders: Order[];
}
