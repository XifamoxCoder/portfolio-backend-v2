import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  public readonly password: string;

  @ApiProperty()
  @IsString()
  public readonly name: string;

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  public readonly darkMode: boolean;

  @ApiProperty({ enum: $Enums.Role, default: $Enums.Role.USER })
  @IsEnum($Enums.Role)
  public readonly role: $Enums.Role;
}
