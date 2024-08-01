import { usersService } from "../repositories/index.js"
import { createHash, isValidPassword } from "../utils/bcrypt.js"
import { generateToken } from "../utils/token.js"

export default class UserController {
    getCurrent = async (req, res) => {
        const {user} = req.session
        if(!user){
            return res.status(401).send('Unauthorized')
        }
        res.send({payload: user})
    }

    register = async (req, res) => {
        const { first_name, last_name, email, password } = req.body
        try {
            const user = await usersService.getUserByEmail(email)
            if(user){
                return res.status(400).send({error: 'Email already exists'})
            }
            await usersService.saveUser({
                first_name,
                last_name,
                email,
                password: createHash(password)
            })
            res.status(201).send({message: 'User created'})
        } catch (error) {
            console.log({error: error.message})
            res.status(400).send({error: error.message})
        }
    }

    login = async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await usersService.getUserByEmail(email)
            if (!user) return res.status(400).send({message: `Usuario con email ${email} existe`})
            if (!isValidPassword(user, password)) return res.status(400).send({message: `Contraseña incorrecta`})
            const safeUser = {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                lists: user.lists
            }
            const token = generateToken(safeUser)
            res.cookie('access_token', token, {
                httpOnly: false,
                maxAge: 1000 * 60 *60
            }).send({payload:safeUser})
        } catch (error) {
            res.status(401).send({error: error.message})
        }
    }

    logout = (req, res) => {
        res.clearCookie('access_token').send({message: 'Logout successful'})
    }
}