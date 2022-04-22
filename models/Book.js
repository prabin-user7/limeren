const mongoose = require("mongoose")

const BookSchema= new mongoose.Schema({

    title :{type:String,required:true,unique:true},
    desc :{type:String},
    img :{type:String},
    pdf :{type:String},
    pubDate:{type:String},
    country:{type:String},
    language:{type:String},
    publisher:{type:String},
    skip:{type:String},
    bookmark:{type:String},
    Mylist:{type:String},
    genre:{type:String}

  
},{timestamps:true})

module.exports = mongoose.model("Book",BookSchema)