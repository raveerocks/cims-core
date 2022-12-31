import { Role } from "./types";

export class User {
  fname: string;
  lname: string;
  email: string;
  avatar: string;
  status: string;
  createdAt: Date;
  roles?: Role[];
}
