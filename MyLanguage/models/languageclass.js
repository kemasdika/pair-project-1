'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LanguageClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LanguageClass.belongsToMany(models.User, {
        through:"UserClasses",
        foreignKey:"ClassId"
      })
    }
  };
  LanguageClass.init({
    class_name: DataTypes.STRING,
    schedule: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LanguageClass',
  });
  return LanguageClass;
};