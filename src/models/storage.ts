import { Schema, Types, model, Model, version } from "mongoose"
import {Storage} from "../interfaces/storage.interface"

const StorageSchema = new Schema<Storage>(
  {
    fileName:{
      type:String,
    },
    idUser:{
      type:String,
    },
    path:{
      type:String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const StorageModel = model("storage", StorageSchema);
export default StorageModel;