import asyncHandler from "../../common/utils/asyncHandler.js";
import { addToCart, getCart } from "./cart.service.js";


export const add=asyncHandler(async(req,res)=>{
    const cart=await addToCart(req.user.id, req.body);
    res.status(201).json({
        success:true,
        data:cart
    })
})


export const get=asyncHandler(async(req,res)=>{
    const cart= await getCart(req.user.id);
    res.json({
        success:true,
        data:cart
    })
})