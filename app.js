const express = require('express');


const _ = require('lodash')
const app = express();
const num = _.random(0,20)
app.set('view engine', 'ejs');


console.log(num)
app.listen(3000)
app.get('/',(req, res) =>{
  res.render('index.ejx', {root: __dirname})
})
app.get('/404',(req,res) =>{
  res.sendFile('./view/404.html', {root : __dirname})
  

})
app.get('/index',(req,res) =>{
  res.sendFile('./view/index.html', {root : __dirname})
  

})
app.get('./about-us' ,(req,res) =>{
  res.redirect('./index.html')
})
