import { Router } from "express";
import { loginController, registerController } from "../controllers/auth"

const router = Router();

router.post('/register');
router.post('/login');

export { router };