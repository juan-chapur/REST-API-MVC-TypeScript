import { sign, verify } from "jsonwebtoken";
import {JWT_SECRET} from "../config"

export const generateToken = (id:string) => {
  const jwt = sign({id}, <string>JWT_SECRET, {
    expiresIn:"2h",
  });
  return jwt;
}

export const verifyToken = (jwt:string) => {
  const isJwtValid = verify(jwt, <string>JWT_SECRET);
  return isJwtValid;
}