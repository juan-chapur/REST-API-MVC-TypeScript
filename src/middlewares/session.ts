import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle"
import { RequestExtended } from "../interfaces/req-ext"

export const checkJwt = (req: RequestExtended, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as {id:string}
    if (!isUser) {
      return res.status(401).send("JWT_NOT_VALID");
    } else {
      req.user = isUser;
      next()
    }

  } catch (error) {
    res.status(400).send("SESSION_NOT_VALID")
  }
}