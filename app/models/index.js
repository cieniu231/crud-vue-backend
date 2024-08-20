const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.cartItem = require("../models/cartItem.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.user.belongsToMany(db.cartItem,{
  through: "cart_items"
})
db.cartItem.belongsTo(db.user,{
  through: "cart_items",
  foreignKey: 'userId'
})

db.tutorials.belongsToMany(db.cartItem,{
  through: "cart_items"
})
db.cartItem.belongsTo(db.tutorials,{
  through: "cart_items",
  foreignKey: 'itemId'
})






db.ROLES = ["user", "admin", "moderator"];


module.exports = db;