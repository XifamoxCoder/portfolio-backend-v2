import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

import { BaseEntity } from '@/shared/entities/base.entity';

export class UserEntity extends BaseEntity {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public password: string;

  @ApiProperty({ default: true })
  public darkMode: boolean;

  @ApiProperty({ default: true })
  public isFirstTime: boolean;

  @ApiProperty({ default: $Enums.Role.USER, enum: $Enums.Role })
  public role: $Enums.Role;
}
