import { MinLength, IsString, IsNumber, IsEmail, Min } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(3)
  age: number;

  @IsString()
  grade: string;
}
