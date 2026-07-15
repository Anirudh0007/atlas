import { Router } from "express";
import authMiddleware from "../../common/middleware/auth.middleware.js";
import validate from "../../common/middleware/validate.middleware.js";
import { createProductSchema } from "./product.validation.js";
import { create, getAll, getById, remove, update } from "./product.controller.js";
import adminMiddleware from "../../common/middleware/admin.middleware.js";


const router=Router();
router.post('/',authMiddleware,adminMiddleware,validate(createProductSchema),create);
router.get('/',getAll);
router.get('/:id',getById);
router.patch('/:id', authMiddleware, adminMiddleware, update);
router.delete('/:id',authMiddleware, adminMiddleware, remove);

export default router;