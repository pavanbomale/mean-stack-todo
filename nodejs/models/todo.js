const mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
    title: String,
    desc: String
})

module.exports = { Todo }