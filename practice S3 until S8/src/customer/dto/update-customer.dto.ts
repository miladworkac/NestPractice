import { PartialType } from '@nestjs/mapped-types';
import { CreatecustomerDto } from './create-customer.dto';
export class UpdatecustomerDto extends PartialType(CreatecustomerDto) {}
