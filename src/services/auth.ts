import Auth from "../interfaces/auth.interface"
import User from "../interfaces/user.interface";
import UserModel from "../models/user"
import { comparePassword, encryptPassword } from "../utils/bcrypt.handle";

export const registerNewUser = async ({ email, password, name }: User) => {
  console.log(email, password, name);
  const existUser = await UserModel.findOne({ email });
  if(existUser) return "ALREADY_USER"
  const passwordHash = await encryptPassword(password);
  const newUser = await UserModel.create({ email, password: passwordHash , name });
  return newUser;
}

export const loginUser = async ({email, password}:Auth) => {
  const existUser = await UserModel.findOne({ email });
  if(!existUser) return "INVALID_USER";
  const passwordHash = existUser.password;
  const isCorrect = await comparePassword(password, passwordHash);
  if (!isCorrect) return "INVALID_PASSWORD";
  return existUser; 
}