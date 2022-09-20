const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UserController = require('../controllers/UserController')
const UserAvatarController = require('../controllers/UserAvatarController')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const userController = new UserController()
const userAvatarController = new UserAvatarController() 

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

userRoutes.post('/', userController.create)
userRoutes.put('/', ensureAuthenticated, userController.update)
userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update)

module.exports = userRoutes