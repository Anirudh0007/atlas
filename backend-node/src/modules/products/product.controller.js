import asyncHandler from "../../common/utils/asyncHandler.js";
import { createProduct, getAllProducts } from "./product.service.js";


export const create=asyncHandler(async(req,res)=>{
    const product=await createProduct(req.body);
    res.status(201).json({
        success:true,
        data:product
    })
})

export const getAll=asyncHandler(async(req,res)=>{
    const products=await getAllProducts();
    res.json({
        success:true,
        data:products
    })
})