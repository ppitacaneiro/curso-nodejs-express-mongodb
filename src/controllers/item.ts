import { Request, Response } from "express";
import { handleHttpRequest } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

const getItem = async ({params}:Request, resp:Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        resp.send(response);
    } catch (error) {
        handleHttpRequest(resp,`ERROR_GET_ITEM ${error}`);
    }
}

const getItems = async (req:Request, resp:Response) => {
    try {
        const response = await getCars();
        resp.send(response);
    } catch (error) {
        handleHttpRequest(resp,`GET_ITEMS ${error}`);
    }
}

const postItem = async (req:Request, resp:Response) => {
    try {
        const response = await insertCar(req.body)
        resp.send(response)
    } catch (error) {
        handleHttpRequest(resp,`ERROR_POST_ITEM ${error}`);
    }
}

const updateItem = async ({params, body}:Request, resp:Response) => {
    try {
        const { id } = params;
        const response = await updateCar(id,body);
        resp.send(response);
    } catch (error) {
        handleHttpRequest(resp,`ERROR_UPDATE_ITEM ${error}`);
    }
}

const deleteItem = async ({params}:Request, resp:Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        resp.send(response);
    } catch (error) {
        handleHttpRequest(resp,`ERROR_DELETE_ITEM ${error}`);
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };