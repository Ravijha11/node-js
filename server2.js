const http = require('http');
const fs = require('fs')
const _ = require('lodash')
const server = http.createServer((req,res)=>{
  let num = _.random(0,50);
  console.log(num)


  console.log(req.method , req.url)
  fs.readFile("./index.html",(err,data) =>{
    res.write(data)
    res.end()
  })
 

})
server.listen(3000,'localhost' , ()=>{
  console.log("listening on the port 3000")
  return

})

