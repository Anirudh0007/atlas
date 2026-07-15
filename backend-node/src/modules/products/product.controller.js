import asyncHandler from "../../common/utils/asyncHandler.js";
import { createProduct } from "./product.service.js";


export const create=asyncHandler(async(req,res)=>{
    const product=await createProduct(req.body);
    res.status(201).json({
        success:true,
        data:product
    })
})