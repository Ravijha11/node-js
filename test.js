// // const name = "mario";
// // console.log(name)

// const great =  (name) => {
//   console.log(`hello , ${name}`)
// }
// great("Ravi")
// great(654)

// const  os = require('os')
// console.log(os)

const fs = require('fs');

if(fs.existsSync('./a.txt')){
  fs.unlink('./a.txt',(err) =>{
    if(err){
      console.log("file is giving errror")
      return
    }
    console.log("file has been deleted")
  })
}
// fs.mkdir('./bigdata', (err)=>{
//   if(err){
//     console.log("error is showing")
//   }
//   console.log("file is created")
// })
// fs.readFile('./a.txt',(err, data) =>{
//   if(err){
//     console.log("Error is showing")
//   }
//   console.log(data.toString())
// })
// fs.writeFile('./read.txt', "hi to the principle i want to leave i am suffereing from fever from since last night", ()=>{
//   console.log("File is writtern in the code")
// })




