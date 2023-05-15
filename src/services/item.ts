import { Car } from "../interfaces/car"
import ItemModel from "../models/item"

const insertCar = async (item:Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert;
}

const getCars = async () => {
    const responseItems = await ItemModel.find({});
    return responseItems;
}

const getCar = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
}

const updateCar = async (id:string, car:Car) => {
    const responseItem = await ItemModel.findOneAndUpdate({_id: id}, car, { new:true });
    return responseItem;
}
    
const deleteCar = async (id:string) => {
    const responseItem = await ItemModel.findByIdAndRemove({_id: id});
    return responseItem;
}

export { insertCar, getCars, getCar, updateCar, deleteCar } 