import { Request, Response } from "express";
import { registerNewUser, loginUser } from '../services/auth';

const loginController = async ({body}:Request, response:Response) => {
    
}

const registerController = async (request:Request, response:Response) => {

}

export { loginController, registerController };