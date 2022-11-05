'use strict';
const express = require('express');

const app =  express();
const port = process.env.PORT || '3333'
app.listen(port);
console.log("=================================================")
console.log("                🚀️ RocketFinances 🚀️             ")
console.log(`           Rodando api na porta ${port}          `)
console.log("=================================================")


app.get('/', (req, res) => {
  return res.status(201).send({
    success: 'ok'
  })
})

