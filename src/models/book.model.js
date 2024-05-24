const mongoose = require ('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: String,
        autor: String,
        tipo: String,
        imagen: String,
        genre: String
    }
)


module.exports = mongoose.model('book', bookSchema)