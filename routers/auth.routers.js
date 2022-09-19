import express from "express";
import * as authController from "../controllers/auth.controllers.js";

const router = express.Router();

router.post('/login', authController.startSession);

router.post('/register', authController.newUser);

router.delete('/logout', authController.endSession); //colocar o middleware quando juntar branchs

export default router;