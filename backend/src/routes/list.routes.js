import { Router } from "express";
import ListController from "../controllers/list.controller.js";

const controller = new ListController()

const listRouter = Router()
    .get('/:lid', controller.getListById)
    .post('/', controller.createList)
    .post('/:lid/:mid', controller.addMovieToList)

export default listRouter