import { Request, Response } from "express";
import { handleHttpRequest } from "../utils/error.handle";
import { insertItem } from "../services/item";

const getItem = (req:Request, resp:Response) => {
    try {

    } catch (error) {
        handleHttpRequest(resp,`ERROR_GET_ITEM ${error}`);
    }
}

const getItems = (req:Request, resp:Response) => {
    try {

    } catch (error) {
        handleHttpRequest(resp,`GET_ITEMS ${error}`);
    }
}

const postItem = async (req:Request, resp:Response) => {
    try {
        const response = await insertItem(req.body)
        resp.send(response)
    } catch (error) {
        handleHttpRequest(resp,`ERROR_POST_ITEM ${error}`);
    }
}

const updateItem = (req:Request, resp:Response) => {
    try {

    } catch (error) {
        handleHttpRequest(resp,`ERROR_UPDATE_ITEM ${error}`);
    }
}

const deleteItem = (req:Request, resp:Response) => {
    try {

    } catch (error) {
        handleHttpRequest(resp,`ERROR_DELETE_ITEM ${error}`);
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };