const mysql = require('mysql2')
const connection = mysql.createPool({
    host: "cnudb.soga.ng",
    user: "cnu",
    password: "r912",
    database: "cnu"
})
// 데이터베이스 시각화
// http://viewcnudb.soga.ng


// 쿼리문
connection.query(`select * from user`, afterData)

function afterData(error, result, field) {
    if(error) {
        console.log(error)
        return
    }

    console.log(result)
}