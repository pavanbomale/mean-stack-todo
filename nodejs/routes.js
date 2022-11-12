const express = require('express')
var router = express.Router()
var objectId = require('mongoose').Types.ObjectId

var { Todo } = require('./models/todo')

// get list of all todos
router.get('/', (req, res) => {
    Todo.find((err, docs) => {
        if (err)
            console.log('error occured')
        else
            res.send(docs)
    })
})

// add new todo
router.post('/', (req, res) => {
    var newTodo = new Todo({
        title: req.body.title,
        desc: req.body.desc
    })
    newTodo.save((err, docs) => {
        if (err)
            console.log('error occured')
        else
            res.send(docs)
    })
})

// get todo with a id
router.get('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send('no record exists with given id')
    else
        Todo.findById(req.params.id, (err, docs) => {
            if (err)
                console.log('error occured')
            else
                res.send(docs)
        })
})

// update a todo
router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send('no record exists with given id')
    else
        var changes = {
            title: req.body.title,
            desc: req.body.desc
        }
        Todo.findByIdAndUpdate(req.params.id, changes, (err, docs) => {
            if (err)
                console.log('error occured')
            else
                res.send(changes)
        })
})

// delete a todo
router.delete('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send('no record exists with given id')
    else
        Todo.findByIdAndDelete(req.params.id, (err, docs) => {
            if (err)
                console.log('error occured')
            else
                res.send(docs)
        })
})

module.exports = { router }