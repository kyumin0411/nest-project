import { IsString, IsInt } from 'class-validator'; // Class validation check decorator, 오류가 있다면 error를 반환한다.
import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
  @IsString()
  @ApiProperty({ description: '이름' })
  name: string;

  @IsInt()
  @ApiProperty({ description: '나이' })
  age: number;

  @IsString()
  @ApiProperty({ description: '색깔' })
  color: string;

  @IsString()
  @ApiProperty({ description: '종' })
  breed: string;
}
