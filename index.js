const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const PORT = process.env.PORT
const dbConnection = require ('./middleware/Database')
const {UserController} = require('./controllers/UserController')
const userRoutes = require('./routes/UserRoutes')


const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(userRoutes);

// app.use(
//   cors({
//     origin: "*"
//   })
// );

app.use("/", (req, res) => {
  // Handle GET request
  if (req.method === "GET") {
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="./public/css/styles.css">
        </head>
        <body>
          <h1 class="greeting">Welcome to HealthProPlus Backend!</h1>
        </body>
      </html>
    `);
  }
});


// dbConnection()


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
