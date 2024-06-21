import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;

    if (!name && !password) throw new BadRequestException('email and password is required');

    return this.prisma.users.create({ data: createUserDto });
  }
}
