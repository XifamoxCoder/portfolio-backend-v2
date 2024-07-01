import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: false, nullable: true, default: true })
  @IsBoolean()
  public readonly isFirstTime?: boolean;
}
