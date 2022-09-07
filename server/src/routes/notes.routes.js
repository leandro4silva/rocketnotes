const {Router} = require('express')

const NotesController = require('../controllers/NotesController')
const notesController = new NotesController()

const notesRoutes = Router()

notesRoutes.get('/:id', notesController.show)
notesRoutes.post('/:user_id', notesController.create)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/', notesController.index)


module.exports = notesRoutes