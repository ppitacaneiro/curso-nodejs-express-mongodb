import { Request, Response } from "express";
import { registerNewUser, loginUser } from '../services/auth';

const loginController = async ({body}:Request, response:Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({email, password});

    if (responseUser === "PASSWORD_INCORRECT") {
        response.status(403);
        response.send(responseUser);
    } else {
        response.send(responseUser);
    }
}

const registerController = async ({body}:Request, response:Response) => {
    const responseUser = await registerNewUser(body);
    response.send(responseUser);
}

export { loginController, registerController };