import { Response } from "express";
import { RequestExtended } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExtended, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_STORAGE");
  }
};

export { getFile };