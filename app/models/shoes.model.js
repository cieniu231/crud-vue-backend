module.exports = (sequelize, Sequelize) => {
    const Shoes = sequelize.define("shoes", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.STRING
      }
    });
  
    return Shoes;
  };