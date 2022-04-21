'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set_time.init({
    event_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    set_time_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Set_time',
  });
  return Set_time;
};