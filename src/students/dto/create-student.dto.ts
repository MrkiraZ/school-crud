/* eslint-disable prettier/prettier */
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName:      string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()   
  lastName:       string;
  @ApiProperty()
  @IsDateString()
  dateOfBirth:    string;
  @ApiProperty()
  @IsString() 
  gender:         string;
  @ApiPropertyOptional()   
  address:        string;
  @ApiPropertyOptional() 
  phoneNumber:    string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email:          string; // Email único
}
