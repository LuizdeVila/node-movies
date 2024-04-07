const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.post('/users/:user_id/notes/:note_id', tagsController.create)
tagsRoutes.get('/:id', tagsController.show)
tagsRoutes.delete('/:id', tagsController.delete)

module.exports = tagsRoutes