const mongoose = require('mongoose')

const schme = new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    body: { type: String },
})

module.exports = mongoose.model('Article', schme)