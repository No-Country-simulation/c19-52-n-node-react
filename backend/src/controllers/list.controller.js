import { listsService } from "../repositories/index.js"

export default class ListController{
    getListById = async (req, res) => {
        const {lid} = req.params
        const list = await listsService.getOneList(lid)
        res.send({payload: list})
    }

    createList = async (req, res) => {
        const list = await listsService.createList()
        res.status(201).send({message: 'List created', payload:list})
    }

    addMovieToList = async (req, res) => {
        const {lid, mid} = req.params
    }
}