import express from "express";
import mongo from "./db/db.js";
import authRouter from "./routers/auth.routers.js";

const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());

const db = await mongo();

app.use(authRouter);

app.listen(port, () => {
  console.log(`Listen on port ${5000}`);
});