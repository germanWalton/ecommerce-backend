const express = require("express");
const { Router } = express;
const router = Router();
const controller = require("../controllers/cart.controller");
const login = require("../middlewares/login.middleware")

router.use(login)

router.get("/", controller.getAllCarts);

router.get("/:id/products", controller.getCartProducts);

router.get("/:id", controller.getCartById);

router.post("/", controller.createCart);

router.post("/:id/:productId", controller.addToCart);

router.delete("/:id", controller.deleteCartById);

router.delete("/:id/products/:prodCode", controller.deleteCartProductById);

module.exports = router;
