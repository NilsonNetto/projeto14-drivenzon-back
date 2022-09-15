import express from "express";
import mongo from "./db/db.js";
import authRouter from "./routers/auth.routers.js";

const app = express();

app.use(express.json());
app.use(cors());

const db = await mongo();

app.use(authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});