module.exports = app => {
    const shoes = require("../controllers/shoes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", shoes.create);
  
    // Retrieve all Tutorials
    router.get("/", shoes.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", shoes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", shoes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", shoes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", shoes.delete);
  
    // Delete all Tutorials
    router.delete("/", shoes.deleteAll);
  
    app.use('/api/shoes', router);
  };