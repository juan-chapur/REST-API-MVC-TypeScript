import { Response, Request } from "express";
import {handleHttp} from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";
import { JwtPayload } from "jsonwebtoken";

interface RequestExtended extends Request {
    user?:string | JwtPayload;
  }

export const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const responseGet = await getCar(id);
        const data = responseGet ? responseGet : "NOT_FOUND";
        res.send(data)
    } catch (error) {
        handleHttp(res,"ERROR_GET_ITEM", error);
    }
};
export const getItems = async (req: RequestExtended, res: Response) => {
    try {
        const responseGet = await getCars();
        res.send({
            data: responseGet,
            user: req.user
        });
    } catch (error) {
        handleHttp(res,"ERROR_GET_ITEMS",error);
    }
};
export const createItem = async (req: Request, res: Response) => {
    try { 
       const responseInsert = await insertCar(req.body);
       res.send(responseInsert);
    } catch (error) {
        handleHttp(res,"ERROR_CREATE_ITEM", error);
    }
};
export const updateItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const responseUpdate = await updateCar(id,req.body);
        res.send(responseUpdate)
    } catch (error) {
        handleHttp(res,"ERROR_UPDATE_ITEM",error);
    }
};
export const deleteItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const responseDelete = await deleteCar(id);
        res.send(responseDelete)
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_ITEM",error);
    }
};