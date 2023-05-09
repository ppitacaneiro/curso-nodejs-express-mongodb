import { Response } from "express";

const handleHttpResponse = (res:Response, error:string) => {
    res.status(500);
    res.send({error});
}

export { handleHttpResponse as handleHttpRequest };