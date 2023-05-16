import { compare } from "bcryptjs";
import { User } from "../interfaces/user";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bccrypt.handle";
import { Auth } from "../interfaces/auth";

const registerNewUser = async ({email, password, name}:User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "USER_ALREADY_EXISTS";

    const passwordHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ 
        email,
        password: passwordHash, 
        name
    });
    return registerNewUser;
}

const loginUser = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if (!checkIs) return "NOT_FOUND_USER";

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) return "PASSWORD_INCORRECT";

    return checkIs;
}

export { registerNewUser, loginUser };
