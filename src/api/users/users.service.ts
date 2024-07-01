import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { RequestContext } from '@/shared/types';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;

    if (!name && !password) throw new BadRequestException('email and password is required');

    return this.prisma.users.create({ data: createUserDto });
  }

  public async findAll() {
    return this.prisma.users.findMany();
  }

  public async findOne(id: number) {
    const user = await this.prisma.users.findUnique({ where: { id } });

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  public async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    return this.prisma.users.update({ where: { id: user.id }, data: updateUserDto });
  }

  public async deleteUser(id: number) {
    const user = await this.findOne(id);
    return this.prisma.users.delete({ where: { id: user.id } });
  }
}
