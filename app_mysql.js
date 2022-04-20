const express = require('express')
require('dotenv').config({ path: 'mysql/.env' }) //환경변수 설정
const mysql = require("./mysql/index.js")

const app = express()

app.use(express.json({
  limit: '50mb'
}))

app.listen(3000, () => {
  console.log('Server started. port 3000')
})

//get(경로, 경로 접속시 실행)
app.get('/api/customers', async (req, res) => {
  const customers = await mysql.query('customerList') //customerList의 query실행
  console.log(customers)
  res.send(customers)
})

app.post('/api/customers/insert', async (req, res) => {
  const result = await mysql.query('customerInsert', req.body.param)
  res.send(result)
})