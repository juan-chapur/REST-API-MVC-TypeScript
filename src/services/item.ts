import ItemModel from "../models/item"
import Car from "../interfaces/car.interface"

export const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
}

export const getCars = async () => {
  const responseGet = await ItemModel.find({});
  return responseGet;
}

export const getCar = async (id: string) => {
  const responseGet = await ItemModel.findOne({ _id: id });
  return responseGet;
}

export const updateCar = async (id: string, data: Car) => {
  const responseUpdate = await ItemModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true }
  );
  return responseUpdate;
}
export const deleteCar = async (id: string) => {
  const responseDelete = await ItemModel.findOneAndRemove({ _id: id });
  return responseDelete;
}