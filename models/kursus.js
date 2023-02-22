'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kursus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kursus.hasMany(models.Akses)
      Kursus.belongsTo(models.Kategori, {foreignKey : 'id_kategori'})
    }
  }
  Kursus.init({
    judul: DataTypes.STRING,
    id_kategori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kursus',
  });
  return Kursus;
};