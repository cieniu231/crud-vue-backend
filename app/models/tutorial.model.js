module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("items", {
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
      },
      category: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };