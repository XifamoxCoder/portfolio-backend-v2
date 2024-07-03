import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'nestjs-prisma';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;

    if (!name && !password) throw new BadRequestException('email and password is required');

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      ...createUserDto,
      password: hashedPassword,
    };

    return this.prisma.users.create({ data: userData });
  }

  public async findAll() {
    return this.prisma.users.findMany();
  }

  public async findOne(id: number) {
    const user = await this.prisma.users.findUnique({ where: { id } });

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  public async findOneByName(name: string) {
    const user = await this.prisma.users.findFirst({ where: { name } });

    if (!user) false;

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
