const PORT = process.env.PORT || 3000
const express = require('express') //expresse
const path = require('path') // path
const apiRouter = require('./routes/api') // router

const app = express() // function express

app.use(express.static(path.join(__dirname, "/public")))
app.use('/api', apiRouter)

app.listen(PORT, () => {console.log(`server rodando em ${PORT}`)})