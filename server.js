const express = require('express')
const app = express()

const perguntaRoutes = require("./src/routes/RoutePergunta")
const respostaRoutes = require("./src/routes/RouteResposta")
const usuarioRoutes = require("./src/routes/RouteUsuario")

app.use('/pergunta', perguntaRoutes)
app.use('/resposta', respostaRoutes)
app.use('/usuario', usuarioRoutes)

app.listen(3000, () => {
    console.log("Server is running...")
})