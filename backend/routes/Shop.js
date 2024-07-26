const express = require("express");

const {
  createShops,
  deleteShopsById,
  getAllShops,
  updateShopById,
  loginShop,
  getShopById
} = require("../controllers/Shop");

const shopRouter = express.Router();
const authorization = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");

shopRouter.post("/",  createShops);
shopRouter.get("/", authentication, getAllShops);
shopRouter.put("/:id", authentication, updateShopById);
shopRouter.delete("/:id", authentication, deleteShopsById);
shopRouter.post("/shop_login", loginShop);
shopRouter.get("/:id",getShopById)

module.exports = shopRouter;
