import express from 'express'

const PORT = process.env.PORT || 8080;

const app = express()

app.use('/', (req, res) => {
    res.send('<h1>Server working</h1>')
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})