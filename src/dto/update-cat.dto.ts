import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatDto {
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
