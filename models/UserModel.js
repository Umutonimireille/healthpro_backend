// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  patientName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patientNid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patientRequestSickness: {
    type: DataTypes.STRING
  },
  heartRate: {
    type: DataTypes.STRING
  },
  bodyTemperature: {
    type: DataTypes.STRING
  }
});

User.sync(); // Create the 'User' table if it doesn't exist

module.exports = User;
