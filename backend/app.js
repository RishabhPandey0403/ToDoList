const express = require('express')
const app = express()
const mongoose = require('./database/mongoose');

/*
 CORS - Cross Origin Request Security
 localhost:3000 - backend api
 localhost:4200 - frontend
 You could also install the cors package and then app.use(cors());
*/

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); /* allows any origin to access our api */
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'); /* allows any of these methods to access our api */
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); /* allows any of these headers to access our api */
    next();
});

// enable application to parse json data
app.use(express.json());

// npm install nodemon -g helps to automatically refresh server anytime file is saved
app.listen(3000, () => console.log('Server Connected on port 3000.'));