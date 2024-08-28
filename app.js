var express = require("express");
var app = express();

var mongoose = require("mongoose"); // DB connection
var config = require("./config");

var setupController = require("./controller/setupController");
var apiController = require("./controller/apiController");

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// connection with mongo db commented because there is some firewall or IP issue
// mongoose
//   .connect(config.getDBConnectionString())
//   .then(() => console.log("Database connected!"))
//   .catch((err) => console.log(err));

setupController(app);
apiController(app);

app.listen(port);