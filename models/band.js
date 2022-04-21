// DEPENDENCIES
const { Sequelize, DataTypes, Models } = require('sequelize')

const sequelize = Sequelize(process.env.PG_URI, { username: "postgres", password: "1303function(){};"})

// Model
class Band extends Model {};

Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
})

//Exports
module.exports = Band;