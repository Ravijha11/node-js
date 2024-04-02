const http = require('http')
const server = http.createServer((req,res) =>{
  console.log('request Made')
})
server.listen(3000,'localhost',() =>{
  console.log("server is listening on the port of 3000")
})