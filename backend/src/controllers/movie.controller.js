import { moviesService } from "../repositories/index.js"

export default class movieController{
    postMovie = async (req, res) => {
        const movie = req.body
        const result = await moviesService.saveMovie(movie)
        res.status(201).send({message: 'Movie saved', payload:result})
    }
}