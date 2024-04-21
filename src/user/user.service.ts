import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { username: dto.username },
    });

    if (user) {
      throw new ConflictException('An account with this email already exists');
    }

    let newUser = this.userRepository.create({
      ...dto,
      createdAt: new Date(),
      password: await hash(dto.password, 10),
    });

    newUser = await this.userRepository.save(newUser);
    const { password, ...res } = newUser;

    return res;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { username: email } });
  }
}
