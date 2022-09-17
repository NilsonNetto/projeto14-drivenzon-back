import express from "express";
import * as productsControllers from "../controllers/products.controllers.js";
import tokenValidation from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(tokenValidation);

router.get('/cart', productsControllers.getCart);

router.delete('/cart', productsControllers.deleteFromCart);

export default router;