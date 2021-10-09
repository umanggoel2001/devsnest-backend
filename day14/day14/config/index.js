require("dotenv").config();
module.exports={
    PORT:process.env.PORT,
    sequelize_database:process.env.SEQUELIZE_DATABASE,
}