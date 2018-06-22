const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')

const db = knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'askme',
    database: 'ask_dev',
  },
})

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/question', async (request, response) => {
  let result = await db.select('*').from('question')
  response.send(result)
})

server.post('/question', async (request, response) => {
  if (request.body.question) {
    let result = await db
      .insert({
        question: request.body.question,
        name: 'Hello ASK',
      })
      .into('question')
      .returning('*')
    response.send({
      message: 'question is not provide',
    })
  }
})

server.listen(3001, () => {
  console.log('> READY !')
})
