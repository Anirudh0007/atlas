import { Router } from "express";
import authMiddleware from "../../common/middleware/auth.middleware.js";
import { place } from "./order.controller.js";


const router=Router();

router.post('/', authMiddleware, place);

export default router;
