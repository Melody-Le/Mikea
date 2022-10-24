"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const cartController_1 = require("../controllers/cartController");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authMiddleware, cartController_1.showCart);
router.post("/add", authMiddleware_1.authMiddleware, cartController_1.addToCart);
router.put("/:lineItemId", authMiddleware_1.authMiddleware, cartController_1.EditCartItem);
router.delete("/:lineItemId", authMiddleware_1.authMiddleware, cartController_1.removeFromCart);
exports.default = router;
