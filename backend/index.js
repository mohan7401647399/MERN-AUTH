import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoute.js';

const app = express();

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log("Server listening on port 3000!");
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})