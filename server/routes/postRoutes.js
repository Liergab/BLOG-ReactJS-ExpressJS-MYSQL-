import express from 'express';
import protect from '../middleware/protect.js';
const router = express.Router()
import * as controller from '../controller/postController.js'
router.get('/',protect, controller.getAllPost)
router.get('/:id',protect, controller.getPostById)
router.post('/',protect, controller.createPost)
router.delete('/:id',protect, controller.deletePost)
router.put('/:id',protect, controller.updatePost)



export default router