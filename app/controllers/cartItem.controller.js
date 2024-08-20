const db = require("../models");
const CartItem = db.cartItem;

const Op = db.Sequelize.Op;

exports.addToCart = (req, res) => {
    CartItem.create({
        userId: req.body.userId,
        itemId: req.body.itemId,
        itemPrice: req.body.itemPrice,
        itemName: req.body.itemName
    })
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    
    CartItem.findAll({where: condition })
        .then(data => {
            res.send(data);
        })
}

exports.findId = (req, res) => {
    const id = req.query.id;
    //var condition = category ? { category: { [Op.like]: `%${category}%` } } : null;
  
    CartItem.findAll({ where: {userId:`${id}`} })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving item to cart."
        });
      });
  };

  exports.deleteItem = (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    
    CartItem.destroy({where:{userId:`${userId}`, itemId:`${itemId}`}, limit:1, force:true})
    .then(res => {
        res.sendStatus(satus);
      })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving item to cart."
        });
      });
  };

        
  
  