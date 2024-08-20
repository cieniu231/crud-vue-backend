
module.exports = (sequelize, Sequelize) => {
    const CartItem = sequelize.define("cartitems", {
        itemPrice: {
            type: Sequelize.STRING
        },
        itemName: {
            type: Sequelize.STRING
        }, 
       
    });

    return CartItem;
};