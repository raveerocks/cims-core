import { IsEmail, IsNotEmpty } from "class-validator";
import { User } from "./models";
import { Role } from "./types";

export class CreateUserRequest {
  @IsNotEmpty()
  readonly fname: string;
  @IsNotEmpty()
  readonly lname: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly roles?: Role[];
}

export class CreateUserResponse {
  status: boolean;
  result: User;
}

export interface UserService {
  createUser(createUserDto: CreateUserRequest): CreateUserResponse;
}
