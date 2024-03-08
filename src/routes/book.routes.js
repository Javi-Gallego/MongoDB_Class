import { Router } from "express"
import { createBook, deleteBookById, getBooks, udpateBookById } from "../controllers/book.controller.js"
import { auth } from "../middleware/auth.js"
import { isSuperAdmin } from "../middleware/isSuperAdmin.js"

const router = Router();

router.post('/', auth, createBook)
router.get('/', getBooks)
router.put('/:id', auth, udpateBookById)
router.delete('/:id', auth, isSuperAdmin, deleteBookById)

export default router