import { Router } from "express"

import { auth } from "../middleware/auth.js"
import { isSuperAdmin } from "../middleware/isSuperAdmin.js"
import { addBookToFavourites, removeBookFromFavourites } from "../controllers/user.controller.js";

const router = Router();

router.put('/add-book-to-favourite', auth, addBookToFavourites)
router.delete('/remove-book-from-favourite', auth, removeBookFromFavourites)

export default router