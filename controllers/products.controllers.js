import { ObjectId } from "mongodb";
import mongo from "../db/db.js";

let db = await mongo();

const getCart = async (req, res) => {
  const { userId } = res.locals;

  try {
    const user = await db.collection('users').findOne({ _id: userId });
    delete user.passwordHash;

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export { getCart };