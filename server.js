const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req)
})
server.listen(3000,'localhost' , ()=>{
  console.log("listening on the port 3000")
  return

})