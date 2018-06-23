const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const knex = require("knex");

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send('Hi Express')
});

server.listen(3001, () => {
  console.log("> Ready !");
});
