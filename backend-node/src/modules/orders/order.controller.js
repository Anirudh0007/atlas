import asyncHandler from "../../common/utils/asyncHandler.js";
import { placeOrder } from "./order.service.js";


export const place=asyncHandler(async(req,res)=>{
    const order=await placeOrder(
        req.user.id
    );

    res.status(201).json({
        success:true,
        data:order
    })
})