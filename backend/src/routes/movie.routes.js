import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const controller = new movieController()

const movieRouter = Router()

movieRouter.post('/', controller.postMovie)

export default movieRouter