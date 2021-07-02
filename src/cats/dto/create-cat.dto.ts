import { IsString, IsInt } from 'class-validator'; // Class validation check decorator, 오류가 있다면 error를 반환한다.

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  color: string;
}
