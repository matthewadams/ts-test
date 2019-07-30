// eslint-disable-next-line no-unused-vars
import express, { Express } from 'express'

const port: number = 3000
const app: Express = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})
