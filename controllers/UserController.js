 
const express = require("express");
const router = express.Router();
const db = require("../middleware/Database"); // Import the SQLite database connection





// // Delete user by ID
module.exports.deleteUser = () => {

  return async (req, res) => {
  const { id } = req.params;
  try {
    const sql = "DELETE FROM User WHERE id = ?";
    db.run(sql, [id], function (err) {
      if (err || this.changes === 0) {
        return res.status(404).json({ error: "User not found." });
      }
      return res.json({ message: "User deleted" });
    });
  } catch (error) {
    return res.status(404).json({ error: "User not found." });
  }
}};









// Update user by ID
module.exports.updateUser = () => {
 return  async (req, res) => {
  const { id } = req.params;
  const {
    patientName,
    patientNid,
    patientRequestSickness,
    heartRate,
    bodyTemperature
  } = req.body;
  try {
    const sql =
      "UPDATE User SET patientName = ?, patientNid = ?, patientRequestSickness = ?, heartRate = ?, bodyTemperature = ? WHERE id = ?";
    db.run(
      sql,
      [
        patientName,
        patientNid,
        patientRequestSickness,
        heartRate,
        bodyTemperature,
        id
      ],
      function (err) {
        if (err || this.changes === 0) {
          return res.status(404).json({ error: "User not found." });
        }
        return res.json({ id: id, ...req.body });
      }
    );
  } catch (error) {
    return res.status(404).json({ error: "User not found." });
  }
}};

// get all users 
module.exports.getAllUsers = () => {

  return async  (req, res, next) => {
  var sql = "select * from user";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows
    });
  });
}};

// get userbyId 

module.exports.getUser = () => {

 return async (req, res, next) => {
  var sql = "select * from user where id = ?";
  var params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row
    });
  });
}};
 
// create user

 module.exports.createUser = () => {
  return  async (req, res) => {
   
 
  var data = {
    patientName: req.body.patientName,
    patientNid: req.body.patientNid,
    patientRequestSickness: req.body.patientRequestSickness,
    heartRate: req.body.heartRate,
    bodyTemperature: req.body.bodyTemperature
  };
 
  var sql =
    "INSERT INTO patient (patientName, patientNid, patientRequestSickness,heartRate,bodyTemperature) VALUES (?,?,?,?,?)";
  var params = [data.patientName, data.patientNid, data.patientRequestSickness,data.heartRate,data.bodyTemperature];
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      id: this.lastID
    });
  });
}};

