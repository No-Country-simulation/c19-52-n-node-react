import { listsService, moviesService } from "../repositories/index.js"

export default class ListController{
    getListById = async (req, res) => {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        res.send({payload: list})
    }

    createList = async (req, res) => {
        const {title} = req.body
        if(!title){
            return res.status(400).send({error: "List must have a title"})
        }
        const list = await listsService.createList(title)
        res.status(201).send({message: 'List created', payload:list})
    }

    addMovieToList = async (req, res) => {
        const {lid, mid} = req.params

        const movie = await moviesService.getMovie(mid)
        if (!movie) {
            return res.status(404).send({ error: 'Movie not found' })
        }
        const movieAdded = listsService.addMovie(lid, mid)
        if (!movieAdded) {
            return res.status(400).send({ error: 'Could not add movie to list' })
        }
        res.send({ message: 'Movie added to a list' })
    }

    changeToPrivate = async (req, res) => {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        if(!list){
            return res.status(400).send({error: 'List not found'})
        }
        if(list.visibility === 'private'){
            return res.status(400).send({error: "Can't change visibility because it's private"})
        }
        const result = await listsService.updateList(lid, {visibility: 'private'})
        if(!result) {
            return res.status(400).send({error: 'Could not change its visibility'})
        }
        res.send({message: `List is private now`})
    }

    changeToPublic = async (req, res) => {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        if(!list){
            return res.status(400).send({error: 'List not found'})
        }
        if(list.visibility === 'public'){
            return res.status(400).send({error: "Can't change visibility because it's public"})
        }
        const result = await listsService.updateList(lid, {visibility: 'public'})
        if(!result) {
            return res.status(400).send({error: 'Could not change its visibility'})
        }
        res.send({message: `List is PUBLIC now`})
    }
}