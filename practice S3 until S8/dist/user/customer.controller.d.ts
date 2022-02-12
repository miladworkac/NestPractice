import { customerService } from './customer.service';
import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
export declare class customerController {
    private readonly customerRepository;
    private readonly customerService;
    constructor(customerRepository: Repository<customer>, customerService: customerService);
    create(createcustomerDto: CreatecustomerDto): customer[];
    findAll(): Promise<customer[]>;
    findOne(id: string): Promise<customer>;
    update(id: string, updatecustomerDto: UpdatecustomerDto): Promise<customer>;
    remove(id: string): Promise<customer>;
}
