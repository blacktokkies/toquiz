import { IsEmail, IsNotEmpty, Matches, MaxLength } from 'class-validator';
import { User } from 'shared';
import { ApiProperty } from '@nestjs/swagger';

// 8~20자 영문, 숫자, 특수문자 최소 한가지씩 조합
const passwordRegex = /^(?=\S*[a-zA-z])(?=\S*[0-9])(?=\S*[$`~!@$!%*#^?&\\(\\)\-_=+])\S{8,20}$/;

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  @ApiProperty()
  username: User['username'];

  @IsNotEmpty()
  @Matches(passwordRegex)
  @ApiProperty()
  password: User['password'];
}
