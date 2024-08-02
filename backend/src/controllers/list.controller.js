import { listsService, moviesService, usersService } from "../repositories/index.js"

export default class ListController{
    getListById = async (req, res) => {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        if(!list){
            return res.status(404).send({error: "List not found"})
        }
        res.send({payload: list})
    }

    getListsByUser = async (req, res) => {
        const {user} = req.session
        const {userId} = req.query

        if(user.id === userId){
            const lists = await listsService.getLists({owner: userId})
            return res.send({message: 'Ok', payload: lists})
        }
        res.status(403).send({error: 'Forbidden'})
    }

    createList = async (req, res) => {
        const {title} = req.body
        const {user} = req.session

        if(!title){
            return res.status(400).send({error: "List must have a title"})
        }
        const list = await listsService.createList(title, user.id)
        const result = await usersService.addListToUser(user.email, list._id)
        if(!result) return res.status(400).send({error: "Something went wrong"})

        res.status(201).send({message: 'List created', payload:list})
    }

    addMovieToList = async (req, res) => {
        const {lid, mid} = req.params
        const movie = await moviesService.getMovie(mid)
        if (!movie) {
            return res.status(404).send({ error: 'Movie not found' })
        }
        const list = await listsService.getOneList(lid)
        const movieIsInList = list.movies.find(m => m?.movie?.equals(mid))
        if(movieIsInList){
            return res.status(404).send({error: "Movie was already in the list"})
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

    removeMovieInList = async (req, res) => {
        const { lid, mid } = req.params;
        const result = await listsService.removeMovieInList(lid, mid)
        if (!result) {
            return res.status(400).send({error: "Cound not remove movie from list"})
        }
        res.send({ message: 'Movie removed' })
    }
    
    deleteList = async (req, res) => {
        const {lid} = req.params
        const result = await listsService.deleteList(lid)
        if(!result) {
            return res.status(400).send({error: "Could not delete list"})
        }
        res.send({message: 'Deleted'})
    }
}