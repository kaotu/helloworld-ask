const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ask_dev'
  }
})

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/question', async (req, res) => {
  let result = await db.select('*').from('question')
  res.send(result)
})

server.post('/question', async (req, res) => {
  if (req.body.question) {
    let result = await db.insert({
      question: req.body.question,
      name: 'test name'
    }).into('question')
    .returning('*')
    res.send({
      message: 'server getquestion',
      databaseRecieve: result
    })
  } else {
    res.send({
      message: 'question is not provide'
    })
  }
  
})

server.listen(3001, () => {
  console.log('> Ready !')
})
