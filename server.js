const express = require("express");
const mustacheExpress = require("mustache-express");
const routes = require("./routes");

const server = express();

server.set("views", `${__dirname}/views`); 
server.engine("mustache", mustacheExpress());
server.set("view engine", "mustache");
server.use(express.urlencoded({ extended: true })); 

server.use(express.json());

server.use(routes);

module.exports = server;