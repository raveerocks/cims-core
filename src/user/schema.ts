import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Role } from "./types";

@Schema()
export class UserDocument extends Document {
  @Prop()
  fname: string;
  @Prop()
  lname: string;
  @Prop()
  email: string;
  @Prop()
  avatar: string;
  @Prop()
  status: string;
  @Prop()
  createdAt: Date;
  @Prop()
  password: string;
  @Prop()
  roles?: Role[];
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
