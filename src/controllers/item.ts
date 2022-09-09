import { Response, Request } from "express";
import {handleHttp} from "../utils/error.handle"
import { insertCar, getCars, getCar } from "../services/item";

export const getItem = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const responseGet = await getCar(id);
        res.send(responseGet)
    } catch (error) {
        handleHttp(res,"ERROR_GET_ITEM", error);
    }
};
export const getItems = async (req: Request, res: Response) => {
    try {
        const responseGet = await getCars();
        res.send(responseGet);
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
export const updateItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_UPDATE_ITEM",error);
    }
};
export const deleteItem = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_ITEM",error);
    }
};