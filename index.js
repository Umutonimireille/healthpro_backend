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




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.use(
  cors({
    explore: true
  })
);
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
