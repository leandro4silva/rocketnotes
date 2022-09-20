const {Router} = require('express')

const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const notesController = new NotesController()

const notesRoutes = Router()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/:id', notesController.show)
notesRoutes.post('/', notesController.create)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/', notesController.index)


module.exports = notesRoutes