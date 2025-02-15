"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init(
    {
      title: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      about: DataTypes.TEXT,
      data_of_birth: DataTypes.DATE,
      status: DataTypes.INTEGER,
    },
    {
      paranoid: true,
      freezeTableName: true,
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
