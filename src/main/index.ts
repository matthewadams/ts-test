// eslint-disable-next-line no-unused-vars
import { Express } from 'express'
import express = require('express')

const port = 3000
const app: Express = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})
