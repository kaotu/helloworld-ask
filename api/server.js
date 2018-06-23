const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const knex = require("knex");

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send("Hi Express!!!!");
});

let questions = [
  {
    text: "Hi"
  },
  {
    text: "Hi"
  }
];

server.get("/questions", (req, res) => {
  res.json(questions);
});

server.post("/questions", (req, res) => {
  questions = [
    ...questions,
    {
      text: req.body.text
    }
  ];
  res.json(questions);
});

server.get("/questions/:id", (req, res) => {
  res.json(questions[req.params.id]);
});

server.put("/questions/:id", (req, res) => {
  questions[req.params.id].text = req.body.text;
  res.json(questions[req.params.id]);
});

server.delete("/questions/:id", (req, res) => {
  questions.splice(req.params.id, 1);
  res.send("deleted");
});

server.listen(3001, () => {
  console.log("> Ready !");
});
