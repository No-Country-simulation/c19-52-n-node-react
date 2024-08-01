import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { authToken } from "../middlewares/auth.js";

const userRouter = Router()
const userController = new UserController

userRouter.get('/current', authToken, userController.getCurrent)
userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.post('/logout', authToken, userController.logout)
userRouter.post('/recovery')

export default userRouter