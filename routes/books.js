const router = require("express").Router()
const Book = require("../models/Book")
const verify = require("../verifyToken")

///CREATE NEW BOOKS
router.post("/",verify, async(req,res)=>{
    if(req.user.isAdmin){
        const newBook = new Book(req.body)

        try {
            const savedBook = await newBook.save()
            res.status(201).json(savedBook)
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed to add books")
    }
})

//UPDATE A BOOK
router.put("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            const updateBook = await Book.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true})
                res.status(200).json(updateBook)
        } catch (err) {
            res.status(500).json(err)
        }
       
    }else{
        res.status(403).json("You are not allowed to update a book")
    }
})

//DELETE TEH BOOK
router.delete("/:id", verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            await Book.findByIdAndDelete(req.params.id)
            res.status(200).json("The book has been deleted.")
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed to delete a book.")
    }
})

//GET THE BOOK
router.get("/find/:id", verify, async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json(book)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL THE BOOKS
router.get("/", verify, async(req,res)=>{
    if (req.user.isAdmin) {
        try {
           const books = await Book.find()
           res.status(200).json(books.reverse())
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You are not allowed ")
    }
})
 

module.exports = router