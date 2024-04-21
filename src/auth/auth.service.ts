import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './auth-login.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    return await this.generateTokens(user);
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.username);

    if (user && (await compare(dto.password, user.password))) {
      const { password, ...res } = user;
      return res;
    }

    throw new UnauthorizedException('Wrong login or password');
  }

  async generateTokens(user: any) {
    const payload = {
      username: user.username,
      sub: {
        id: user.id,
      },
    };

    const { password, ...userinfo } = user;

    return {
      user: userinfo,
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '5m',
        secret: process.env.ACCESS_TOKEN_SECRET,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.REFRESH_TOKEN_SECRET,
      }),
    };
  }
}
