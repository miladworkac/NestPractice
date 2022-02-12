import { IsNumber, IsString } from 'class-validator';

export class CreatecustomerDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  statuse: string;
}
