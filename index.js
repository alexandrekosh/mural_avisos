const PORT = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const post = [
    {
        id: "7dsfh8",
        title: "Basket",
        description: "Jogo de basket as 9pm"
    },
]

app.get("/all", (req, res) => {

    res.json(JSON.stringify(post))

})

app.post("/new", bodyParser.json(), (req, res) => {

    let id = generatoID()
    let title = req.body.title
    let description = req.body.description

    post.push({id, title, description})
    
    res.send("Post adicionado com sucesso")
})

app.listen(PORT, () => {console.log(`server rodando em ${PORT}`)})

function generatoID() {
    return Math.random().toString(36).substring(2, 9)
}