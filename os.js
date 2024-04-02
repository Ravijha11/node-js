// const os = require("os");
// console.log(os)

const fs = require('fs')
// fs.readFile('./a.txt ', (err,data) =>{
//   if (err){
//     console.log("error")

//   }
//   console.log(data.toString())
// })

fs.writeFile('./a.txt', 'hello add krde isko' , () =>{
  console.log(`file writtten in this path can u pls check it out here  `)
})

fs.mkdir('./assests', (err) => {
  if(err){
    console.log("here is an error")
  }
  console.log("file is created")
})

if(fs.existsSync('./people.js')){
  fs.unlink('./people.js',(err) => {
    if(err){
      console.log("there is error  so pls  fix it okieee!!! ")
    }
    console.log("file  has been deleted")
  })
}
const readStream = fs.createReadStream('./stream.txt');
readStream.on('data',(chunk)=>{
  console.log(chunk.toString())
})