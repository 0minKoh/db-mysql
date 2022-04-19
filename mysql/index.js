const mysql = require('mysql')
const sql = require('./sql.js') //sql query문이 작성됨

const pool = mysql.createPool({ //connection pool 생성
  connectionLimit : process.env.MYSQL_LIMIT,
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

//query문을 실행하고 결과를 반환하는 함수
const query = async (alias, values) => {
  return new Promise((resolve, reject) => { 
    //promise() 함수
    //resolve - 응답 성공시 //reject - 응답 실패시
    pool.query(sql[alias], values, (err, results) => {
      if (err) {
        console.error(err)
        reject({err})
      } else resolve(results)
    })
  })
}

//query 함수 전역 사용
module.exports = { query }