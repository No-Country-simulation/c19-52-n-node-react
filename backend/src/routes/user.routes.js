import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { authToken } from "../middlewares/authToken.js";

const userRouter = Router()
const userController = new UserController

userRouter
    .get('/current', authToken, userController.getCurrent)
    .post('/register', userController.register)
    .post('/login', userController.login)
    .post('/logout', authToken, userController.logout)
    .post('/recovery')

export default userRouter