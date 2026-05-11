import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dto/user.dto';
import { AuthResponseDto, LoginDto } from '../dto/auth.dto';
import { User } from '../generated/client';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(auth: LoginDto): Promise<AuthResponseDto> {
    return {
      access_token: 'identity_token_for_' + auth.email,
      user: {
        id: auth.id,
        name: auth.name,
        email: auth.email,
      },
    };
  }

  async findOne(id: string) {
    return this.userRepository.findById(id);
  }

  async createUser(data: CreateUserDto) {
    return this.userRepository.create(data);
  }
}
