import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { DetectUserEntity } from './entities/detect-user.entity';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiCreatedResponse({ type: DetectUserEntity })
  registerUser(@Body() data: LoginAuthDto): Promise<DetectUserEntity> {
    return this.authService.registerUser(data);
  }
}
