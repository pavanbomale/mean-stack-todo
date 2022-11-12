const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TodoDB', (err) => {
    if(err)
        console.log('an error occured')
    else
        console.log('success')
})

module.exports = mongoose