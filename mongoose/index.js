const mongoose = require('mongoose')

const connect = () => {
  if(process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true)
  }
}

mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
  dbName: 'dev'
}, (error) => {
  if(error) {
    console.log('MongoDB 연결 에러', error)
  } else {
    console.log('MongoDB 연결 성공', 'localhost:27017/admin')
  }
})

mongoose.connection.on('error', error => {
  console.log('MongoDB error', error)
})

mongoose.connection.on('disconected', () => {
  console.log('MongoDB disconnected, reconnecting')
  connect()
})

module.exports = {
  connect
}