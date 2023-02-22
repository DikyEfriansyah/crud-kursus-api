'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Akses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Akses.belongsTo(models.User, {foreignKey : 'id_user'})
      Akses.belongsTo(models.Kursus, {foreignKey : 'id_kursus'})
    }
  }
  Akses.init({
    id_user: DataTypes.INTEGER,
    id_kursus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Akses',
  });
  return Akses;
};