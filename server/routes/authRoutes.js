import express from 'express';
import * as controller from '../controller/authController.js'
const router = express.Router()

router.post('/register', controller.register)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/getUser',controller.getUser )


export default router