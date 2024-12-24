    'use strict';
    const { Model } = require('sequelize');
    module.exports = (sequelize, DataTypes) => {
      class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
      }

      User.init({
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
      },{
        sequelize,
        modelName: 'User',
        tableName: 'users',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
        defaultScope: {
          attributes: { exclude: ['password', 'created_at', 'updated_at'] }
        },
        scopes: {
          withoutPassword: {
            attributes: { exclude: ['password'] }
          }
        }
      });

      return User;
    };