const mongoose = require('mongoose')

const Schema = mongoose.Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    
    status: {
        type: Boolean,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
