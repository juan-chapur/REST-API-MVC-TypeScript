import { Request, Response, NextFunction } from "express";

export const logMiddleware = (req: Request, res: Response, next:NextFunction) => {
  console.log("Hola soy el log");
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log(userAgent);
  next();
}