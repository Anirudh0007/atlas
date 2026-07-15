import asyncHandler from '../../common/utils/asyncHandler.js';
import {loginUser, registerUser} from './auth.service.js';

export const register=asyncHandler(async(req,res)=>{
    const user=await registerUser(req.body);
    res.status(201).json({
        success:true,
        data:user
    })
})

export const login=asyncHandler(async(req,res)=>{
    const result=await loginUser(req.body);
    res.status(201).json({
        success:true,
        data:result
    })

})