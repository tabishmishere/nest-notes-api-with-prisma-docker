import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  private nextId = 1;

  findAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.nextId,
      ...createUserDto,
    };

    this.nextId += 1;
    this.users.push(user);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.users.find((currentUser) => currentUser.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    Object.assign(user, updateUserDto);

    return user;
  }

  remove(id: number): { message: string } {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    this.users.splice(userIndex, 1);

    return { message: `User with id ${id} deleted` };
  }
}
