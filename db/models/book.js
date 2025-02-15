'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    authourId: DataTypes.INTEGER,
    yearPublished: DataTypes.DATE,
    qty: DataTypes.INTEGER,
    batchNo: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    paranoid: true,
      freezeTableName: true,
    sequelize,
    modelName: 'Book',
  });
  return Book;
};