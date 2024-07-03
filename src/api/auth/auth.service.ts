import { BadRequestException, Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { DetectUserEntity } from './entities/detect-user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  public async registerUser(data: LoginAuthDto): Promise<DetectUserEntity> {
    let user = await this.usersService.findOneByName(data.name);

    if (user) throw new BadRequestException('User already exists');

    user = await this.usersService.createUser(data);

    return { id: user.id };
  }
}
