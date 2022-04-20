const express = require('express');
const mongodb = require('./mongoose/index.js');
const Customer = require('./mongoose/schema/customer.js')

const app = express();

mongodb.connect();

app.listen(3000, () => {
  console.log('Server started. port: 3000')
})

app.get('/customers', async (req, res) => {
  const customer = await Customer.find()
  console.log(customer)
})

//data 추가
//.create
await Customer.create({
  name: 'Customer',
  email: 'customer@example.com',
  phone: '010-2222-2222',
  address: ''
})

//data 수정
//.findByIdAndUpdate

await Customer.findByIdAndUpdate(id, { phone: '010-2222-2222' })
