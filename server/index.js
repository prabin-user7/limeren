
const path = require('path')
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
 //have Node serve the files for our built React app
 app.use(express.static(path.resolve(__dirname,'../client/build')))
//Handle GET requests to /api route
 app.get("/api",(req,res)=>{
    res.json({message:"Hello from the server :)"})
})
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/bulid','index.html'))
})
//All other GET requests not handled before will return our React app

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})