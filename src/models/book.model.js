const mongoose = require ('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: String,
        autor: String,
        genre: String,
        publication_date: String,
    }
)


module.exports = mongoose.model('book', bookSchema)