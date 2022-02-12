import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { customer } from '../../customer/entities/customer.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderName: string;

  @ManyToMany((type) => Product, (Product) => Product.orders, {
    cascade: true,
  })
  @JoinTable()
  products: Product[];

  
  @ManyToOne((type) => customer, (customer) => customer.orders)
  @JoinColumn({
    name: 'customer_id',
    referencedColumnName: 'id',
  })
  customer: customer;
}
