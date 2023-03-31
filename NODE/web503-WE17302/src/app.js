import express from "express";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import cors from 'cors'
import mongoose from "mongoose";

const app = express();
const cors = cors();

app.use(cors())


app.use(express.json());

// router
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` })
})
app.use("/api", productRouter);
app.use("/api", authRouter);




mongoose.connect("mongodb://127.0.0.1:27017/web17302");

export const viteNodeApp = app;
