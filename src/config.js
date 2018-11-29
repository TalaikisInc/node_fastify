import { join } from 'path'
const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development'
require('dotenv').config({ path: join(__dirname, `../.env.${NODE_ENV}`) })
const logging = !(NODE_ENV === 'production')

const config = {
  port: process.env.API_PORT,
  logging
}

export default config
