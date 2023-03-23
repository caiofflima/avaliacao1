const express = require('express')
const router = express.Router()

let usuario = []

router.get('/', (req, res) => {
    if (usuario.length > 0) {
        console.log(usuario)
        res.json(usuario)
    } else {
        console.log("Não há registros.")
        res.send("Não há registros.")
    }
})

router.post('/', (req, res,next) => {
    usuario.push({name: req.query.name, email: req.query.email})
    console.log(req.query.name)
    console.log(req.query.email)
    res.json(usuario[usuario.length-1])
})

router.put('/:name/:email', (req, res) => {
    console.log(req.params.name + " " + req.params.email + ": Funcionalidade em construção.")
    res.send(req.params.name + " " + req.params.email + ": Funcionalidade em construção.")
})

router.delete('/:name', (req, res) => {
    let aux = '{"name" : ""}'
    if (usuario.length > 0) {
        for (let u of usuario) {
            if (u.name == req.params.name) {
                aux = u
            }
        }
    }
    if (aux.name == req.params.name) {
        console.log(aux)
        res.json(aux)
    } else {
        console.log("Usuario não encontrado!")
        res.send("Usuario não encontrado!")
    }
})

module.exports = router