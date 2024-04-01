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