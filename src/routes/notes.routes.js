const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.get('/:user_id', notesController.index)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes