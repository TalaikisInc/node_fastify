import jsonParser from 'fast-json-body'
import config from './config'
const fastify = require('fastify')({
  logger: config.logging
})

fastify.use(require('cors')())
fastify.addContentTypeParser('application/json', (req, done) => {
  jsonParser(req, (err, body) => {
    done(err, body)
  })
})

fastify.get('/', async (req, res) => {
  res.type('application/json').code(200)
  return { hello: 'world' }
})

fastify.listen(config.port, (err, address) => {
  if (err) {
    throw err
  }
  fastify.log.info(`Server listening on ${address}`)
})
