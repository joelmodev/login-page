const express = require('express')

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = require('./modules/mysql.js')

require('dotenv').config()

/*
/
Express Routes
/
*/

app.get('/', (req, res) =>{
    res.render('index')
})

app.listen(3001)