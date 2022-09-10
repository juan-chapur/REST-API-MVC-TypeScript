import { hash, compare } from "bcrypt";

export const encryptPassword = async (password:string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
}
export const comparePassword = async(password:string, passwordHash:string) => {
  const isCorrect = await compare(password, passwordHash);
  return isCorrect;
}