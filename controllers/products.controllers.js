import mongo from "../db/db.js";

let db = await mongo();

const getCart = async (req, res) => {
  const { userId } = res.locals;

  try {
    const user = await db.collection('users').findOne({ _id: userId });
    delete user.passwordHash;
    const userCart = user.cart?.map((product) => db.collection('products').findOne({ _id: product.productId }));

    res.status(200).send({ user, userCart });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteFromCart = async (req, res) => {
  const { userId } = res.locals;
  const { productId } = req.body;

  try {
    const user = await db.collection('users').findOne({ _id: userId });
    const newcart = user.cart.filter(product => product.productId !== productId);

    await db.collection('users').updateOne({ _id: userId }, { $set: { cart: newcart } });
    res.status(200).send('Carrinho atualizado');
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export { getCart, deleteFromCart };