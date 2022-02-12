import { IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  orderName: string;

  @IsString({ each: true })
  products: string[];
}
