import { Router } from "express";
import Movie from "../controllers/movie.controller.js";
import movieController from "../controllers/movie.controller.js";

const controller = new movieController()

const movieRouter = Router()
    .post('/', controller.postMovie)

export default movieRouter