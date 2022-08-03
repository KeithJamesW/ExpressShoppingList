const express = require("express")
const app = express();
const itemsRoutes = require("./routes/items")
const ExpressError = require("./expressError")
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use("/items", itemsRoutes);