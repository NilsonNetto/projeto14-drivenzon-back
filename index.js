import express from "express";
import mongo from "./db/db.js";
import cors from "cors";
import authRouter from "./routers/auth.routers.js";
import productsRouter from "./routers/products.routers.js";

const app = express();

app.use(express.json());
app.use(cors());

const db = await mongo();

app.use(authRouter);
app.use(productsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});