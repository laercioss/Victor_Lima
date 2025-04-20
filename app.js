const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Olá, sou progamador BackEnd Jr !!!')
})

app.get('/sobre', function(req, res){
    res.send('Aqui encontrasse algumas coriosidades sobre nós.')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao nosso blog de ajuda.')
})

app.get('/Ola/:cargo/:nome', function(req, res){
    res.send('<h1>Olá' +req.params.nome+ '<h1>')
    res.send('<h2>Seu cargo é: ' +req.params.cargo+ '<h2>')
})

app.listen(3000, function(){console.log('Servidor ligado!')})