const http = require('http');
const server = http.createServer((req,res)=>{
  console.log(req.method , req.url)
})
server.listen(3000,'localhost' , ()=>{
  console.log("listening on the port 3000")
  return

})