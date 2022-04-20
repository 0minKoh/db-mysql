const mongoose = require('mongoose');

const {Schema} = mongoose;
const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  }
})

const Customer = mongoose.model('Customer', customerSchema); //mongoose.model('스키마 이름', '스키마 객체)

module.exports = Customer;