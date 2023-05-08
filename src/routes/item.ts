import { Router,Request,Response } from "express";

const router = Router();
router.get('/', (request:Request,response:Response) => {
    response.send({ data: 'AQUI_VAN_LOS_MODELOS'});
});

export { router };