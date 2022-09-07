import { Response, Request } from "express";

export const getItems = (req: Request, res: Response) => {
    res.send({data:"data"})
};
