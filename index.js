require('dotenv').config();

const express = require('express')();
const parser = require('body-parser');

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const CONFIRMATION = process.env.CONFIRMATION;

express.use(parser.json());

express.post('/vk-bot/', (request, response) => {
    if (request.body.type == 'confirmation')
        return CONFIRMATION;

    console.log(request.body);
    response.end('OK');
});

express.listen(80, console.log('Server work...'));