import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { CustomerService } from './customer.service';
export declare class customerController {
    private readonly customerRepository;
    private readonly customerService;
    constructor(customerRepository: Repository<customer>, customerService: CustomerService);
    create(createcustomerDto: CreatecustomerDto): Promise<customer>;
    findAll(): Promise<customer[]>;
    findOne(id: string): Promise<customer>;
    update(id: string, updatecustomerDto: UpdatecustomerDto): Promise<customer>;
    remove(id: string): Promise<customer>;
}
