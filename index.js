
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const bookRoute = require("./routes/books")
const listRoute = require("./routes/lists")

dotenv.config();
//connect mongoose with the database 

mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser : true,
    useUnifiedTopology : true,
    // useCreateIndex:true
})
.then(()=>console.log("DB conn success!"))
.catch((err)=>console.log(err))

app.use(express.json())
//Routers 

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/books",bookRoute)
app.use("/api/lists",listRoute)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})