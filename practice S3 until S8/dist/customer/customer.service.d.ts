import { Repository } from 'typeorm';
import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<customer>);
    create(body: CreatecustomerDto): Promise<customer>;
    findAll(): Promise<customer[]>;
    findOne(id: number): Promise<customer>;
    update(id: number, body: UpdatecustomerDto): Promise<customer>;
    remove(id: number): Promise<customer>;
}
