import { Router } from "express";
import ListController from "../controllers/list.controller.js";
import { authToken } from "../middlewares/auth.js";

const controller = new ListController()

const listRouter = Router()

listRouter.get('/', authToken, controller.getListsByUser)
listRouter.get('/:lid', controller.getListById)
listRouter.post('/', authToken, controller.createList)
listRouter.post('/private/:lid', authToken, controller.changeToPrivate)
listRouter.post('/public/:lid', authToken, controller.changeToPublic)
listRouter.post('/:lid/:mid', authToken, controller.addMovieToList)
listRouter.delete('/:lid', authToken, controller.deleteList)
listRouter.delete('/:lid/movie/:mid', authToken, controller.removeMovieInList)

export default listRouter