const express = require('express')
const mongoose = require('mongoose')

// Setup express app
const app = express()
app.set('view engine','ejs');
app.set('views','all-views')

app.get('/',(req,res)=>res.render('first-template',{name:'piraphol',
lastname:'awae'}))


//Connect to mongodb บน cloud MongoDB Atlas
// mongoose.connect('mongodb+srv://inzaky2000:qsjK2Zk3oxsxnfA1@cluster0.jkhnrjh.mongodb.net/?retryWrites=true&w=majority/sunfukdb')

//Connect to mongodb บน localhost
mongoose.connect('mongodb://localhost:27017/nodejseventdb')
mongoose.Promise = global.Promise

app.use(express.json()) //เพื่อให้ convert เป็น json

//การสร้าง router ใน express
// app.get('/api',(req,res)=>res.send('It working!!'))

//โหลด router
app.use('/api',require('./routes/api'))


//error Handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
});

app.listen(process.env.port||4000,function () {
    console.log('Ready to go ')
})