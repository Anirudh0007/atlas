import asyncHandler from "../../common/utils/asyncHandler.js";
import { addToCart } from "./cart.service.js";


export const add=asyncHandler(async(req,res)=>{
    const cart=await addToCart(req.user.id, req.body);
    res.status(201).json({
        success:true,
        data:cart
    })
})