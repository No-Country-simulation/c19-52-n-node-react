import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import handlebars from 'express-handlebars'
import cors from 'cors'
import { getVariables } from './config/dotenv.config.js';
import userRouter from './routes/user.routes.js';
import listRouter from './routes/list.routes.js';
import movieRouter from './routes/movie.routes.js';

const {PORT, MONGO_URL} = getVariables()

const app = express()
mongoose.connect(MONGO_URL)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())

const hdb = handlebars.create({
    runtimeOptions:{
        allowProtoPropertiesByDefault: true
    }
})
app.engine('handlebars', hdb.engine);
app.set('views', 'src/views');
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.send('<h1>Server working</h1>')
})

app.use('/api/users', userRouter)
app.use('/api/lists', listRouter)
app.use('/api/movies', movieRouter)

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/logout', (req, res) => {
    res.render('logout')
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})