'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage_events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stage_events.init({
    stage_events_id: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stage_events',
  });
  return stage_events;
};