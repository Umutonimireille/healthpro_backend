var sqlite3 = require("sqlite3").verbose();
// var md5 = require("md5");

const DBSOURCE = "healthpro.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE patient (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            patientName text, 
            patientNid text , 
            patientRequestSickness text, 
            heartRate text, 
            bodyTemperature text
            
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          
           var insert =
  "INSERT INTO patient (patientName, patientNid, patientRequestSickness, heartRate, bodyTemperature) VALUES (?, ?, ?, ?, ?)";

         
        }
      }
    );
  }
});

module.exports = db;
