import { Router } from "express";
import authMiddleware from "../../common/middleware/auth.middleware.js";
import validate from "../../common/middleware/validate.middleware.js";
import { createProductSchema } from "./product.validation.js";
import { create, getAll } from "./product.controller.js";
import adminMiddleware from "../../common/middleware/admin.middleware.js";


const router=Router();
router.post('/',authMiddleware,adminMiddleware,validate(createProductSchema),create);
router.get('/',getAll);

export default router;