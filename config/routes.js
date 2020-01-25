const express = require('express')
const router = express.Router()
const bookscontroller = require('../app/controllers/bookscontroller')
const usersController=require('../app/controllers/UsersController')
const { authenticateUser } = require('../app/middlewares/authentication')

router.get('/books', authenticateUser, bookscontroller.list)
router.get('/books/:id',authenticateUser,bookscontroller.show)
router.post('/books',authenticateUser,  bookscontroller.create)
router.put('/books/:id', authenticateUser,bookscontroller.update)
router.delete('/books/:id',authenticateUser, bookscontroller.destroy)

router.get('/users/account', authenticateUser, usersController.account)
router.post('/users/register/',usersController.register)
router.post('/users/login',usersController.login)
router.delete('/users/logout',authenticateUser, usersController.logout)



module.exports = router
