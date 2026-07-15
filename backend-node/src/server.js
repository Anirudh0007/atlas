import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const PORT=process.env.PORT||5000;



const startServer= async()=>{

    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }
    catch(error)
    {
        console.log("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();