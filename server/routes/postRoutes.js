import express from 'express';
const router = express.Router()
import * as controller from '../controller/postController.js'
router.post('/', controller.createPost)

export default router