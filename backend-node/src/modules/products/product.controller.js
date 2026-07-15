import asyncHandler from "../../common/utils/asyncHandler.js";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./product.service.js";


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

export const getById=asyncHandler(async(req,res)=>{
    const product=await getProductById(req.params.id);
    res.json({
        success:true,
        data:product
    })
})

export const update=asyncHandler(async(req,res)=>{
    const product=await updateProduct(req.params.id,req.body);
    res.json({
        success:true,
        data:product
    })
})

export const remove=asyncHandler(async(req,res)=>{
    await deleteProduct(req.params.id);
    res.json({
        success:true,
        message: 'Product deleted successfully'
    })
})