import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes.js';
import authMiddleware from './common/middleware/auth.middleware.js';
import errorHandler from './common/middleware/error.middleware.js';
const app=express();

app.use(cors());
app.use(express.json());

app.get("/me", authMiddleware,(req,res)=>{
    res.json({
        success:true,
        user: req.user
    })
})
app.get('/health', (req,res)=>{
    res.json({
        success:true,
        message:'Atlas Backend running'
    })
})



app.use('/api/v1/auth', authRoutes);
app.use(errorHandler);

export default app;