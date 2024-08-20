/*
const controller = require("../controllers/cartItem.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/cart/add",
      
      controller.addToCart
    );

    app.get(
        `/api/cart/:userId`,
        controller.findId
    )
  
  };
*/

module.exports = app => {
    const cart = require("../controllers/cartItem.controller.js");

  
    var router = require("express").Router();
  
    router.get("/:id", cart.findId);

    router.post("/add", cart.addToCart);

    router.delete("/deleteitem/:itemId/:userId", cart.deleteItem);
  
    app.use('/api/cart', router);
  };