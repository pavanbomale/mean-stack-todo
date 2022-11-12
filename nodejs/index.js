const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { mongoose } = require('./db.js')
const { router } = require('./routes.js')

var app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}))
app.use(bodyParser.json())
app.use('/', router)

app.listen(3000, () => console.log('App running on port 3000'))