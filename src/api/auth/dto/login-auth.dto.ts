import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginAuthDto {
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(4, { message: 'Name is too short. Minimum length is $constraint1 characters.' })
  @MaxLength(20, { message: 'Name is too long. Maximum length is $constraint1 characters.' })
  public readonly name: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(8, { message: 'Password is too short. Minimum length is $constraint1 characters.' })
  @MaxLength(100, { message: 'Password is too long. Maximum length is $constraint1 characters.' })
  @Matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/, {
    message:
      'Password too weak. It must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
  })
  public readonly password: string;
}
