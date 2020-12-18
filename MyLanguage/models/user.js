'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.LanguageClass, {
        through:"UserClasses",
        foreignKey:"UserId"
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'username is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          msg: 'Email format not match'
        },
        notEmpty: {
          msg: 'email is required'
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'first name is required'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'last name is required'
        }
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'phone number is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate:{
        notEmpty: {
          msg: 'role is required'
        }
      }
    }
  }, {
    hooks:{
      beforeCreate(instance,options) {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};