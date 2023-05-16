import { hash, compare } from "bcryptjs"

const encrypt = async (pass:string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
}

const verified = async (password:string, passwordHash:string) => {
    const isCorrect = await compare(password, passwordHash);
    return isCorrect;
}

export { encrypt, verified };