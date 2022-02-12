import { customerService } from './customer.service';
import { CreatecustomerDto } from './dto/create-customer.dto';
import { UpdatecustomerDto } from './dto/update-customer.dto';
import { customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
export declare class customerController {
    private readonly customerRepository;
    private readonly customerService;
    constructor(customerRepository: Repository<customer>, customerService: customerService);
    create(createcustomerDto: CreatecustomerDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updatecustomerDto: UpdatecustomerDto): any;
    remove(id: string): any;
}
