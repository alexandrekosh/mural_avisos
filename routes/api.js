const express = require('express') //expresse
const router = express.Router() // router
const bodyParser = require('body-parser') //body-parse
const cors = require('cors') // cors
const post = require('../model/post') // post

// const options = {
//     origin: 'http://localhost:3000',
// }

// router.use(cors(options))

// buscar por todos os posts
router.get("/all", (req, res) => {
    res.json(JSON.stringify(post.getAll()))
})

// criar novo post
router.post("/new", bodyParser.json(), (req, res) => {
    let title = req.body.title
    let description = req.body.description
    post.newPost(title, description)

    res.send("Post adicionado com sucesso")
})

module.exports = router