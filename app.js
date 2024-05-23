const dotenv = require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Default App Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to gesumayor NodeJs Sequelizer & MySQL application.",
  });
});
//Auth Routes handler
require("./app/routes/authRoutes")(app);

// App 404  route
app.use("*", (req, res, nex) => {
  res.status(404).json({
    status: "Not Found",
    message: "The resource you are looking for does not exist, try again",
  });
});

// set port, listen for requests
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running and listening to request on port ${PORT}.`);
});
