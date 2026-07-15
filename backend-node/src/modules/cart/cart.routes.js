import { Router } from "express";
import authMiddleware from "../../common/middleware/auth.middleware.js";
import validate from "../../common/middleware/validate.middleware.js";
import { add, get } from "./cart.controller.js";
import { addToCart } from "./cart.service.js";
import { addToCartSchema } from "./cart.validation.js";


const router=Router();

router.post('/',authMiddleware,validate(addToCartSchema), add);
router.get('/', authMiddleware, get);

export default router;