const express = require('express');

const server = express();

server.use(express.json());

const apiRouter = require('./routers/api-router.js')
server.use('/api', apiRouter)



const port = process.env.PORT || 6000;

server.listen(port, ()=> console.log(`\n === Server Running on Port ${port} ===`))