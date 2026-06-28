import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create and return users', () => {
    const user = service.create({
      name: 'Ali',
      email: 'ali@example.com',
      password: 'secret123',
    });

    expect(user).toEqual({
      id: 1,
      name: 'Ali',
      email: 'ali@example.com',
      password: 'secret123',
    });
    expect(service.findAll()).toEqual([user]);
  });

  it('should update a user', () => {
    const user = service.create({
      name: 'Ali',
      email: 'ali@example.com',
      password: 'secret123',
    });

    const updatedUser = service.update(user.id, { name: 'Ahmed' });

    expect(updatedUser.name).toBe('Ahmed');
    expect(updatedUser.email).toBe('ali@example.com');
  });

  it('should delete a user', () => {
    const user = service.create({
      name: 'Ali',
      email: 'ali@example.com',
      password: 'secret123',
    });

    service.remove(user.id);

    expect(service.findAll()).toEqual([]);
  });
});
