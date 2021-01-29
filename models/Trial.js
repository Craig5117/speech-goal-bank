const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trial extends Model {}

Trial.init (
    {
        // trial id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // date
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // number successful as fraction
        successful: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // percent
        percent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // student_goal_id through Student_Goal Model
        student_goal_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'student_goal',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'trial'
    }
);

module.exports = Trial;