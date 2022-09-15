import express from "express";
import mongo from "./db/db.js";

const app = express();

app.use(express.json());
app.use(cors());

const db = await mongo();

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});