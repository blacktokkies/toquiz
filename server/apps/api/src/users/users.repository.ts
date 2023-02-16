import { Injectable } from '@nestjs/common';
import { MysqlPrismaService } from 'libs/prisma/src/mysql-prisma.service';
import { CreateUserDto } from './dto';
import { type PROVIDER, User } from 'shared';

@Injectable()
export class UsersRepository {
  constructor(private mysqlService: MysqlPrismaService) {}

  async getUserByUsername(username: User['username']): Promise<User> {
    return await this.mysqlService.user.findFirst({ where: { username } });
  }

  async createUser(createUserDto: CreateUserDto, provider: PROVIDER): Promise<void> {
    await this.mysqlService.user.create({ data: { ...createUserDto, provider } });
  }
}