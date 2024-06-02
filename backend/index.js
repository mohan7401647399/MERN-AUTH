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