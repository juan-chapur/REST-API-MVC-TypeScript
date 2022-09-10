import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { loginUser, registerNewUser } from "../services/auth"

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body
    const responseUser = await registerNewUser({ email, password, name });
    res.send(responseUser)
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER", error);
  }
}
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const responseUser = await loginUser({ email, password });
    if (responseUser == "INVALID_PASSWORD") res.status(403).send(responseUser)
    res.send(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN", error);
  }
}