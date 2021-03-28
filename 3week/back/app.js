// 웹 서버 구동 파일 express 가져오기
const express = require('express')
// 웹 서버 구동 파일을 실행 시킴
const app = express();
// 실행 시킨 구동 파일(서버)를 8000번 포트에서 열어줌
const server = app.listen(8000, a)

// 8000포트에서 서버를 연 이후에 실행할 작업
function a() {
    console.log("서버가 실행되었습니다.")
}

// html파일을 이용해도 좋지만, 나중을 위해 
// b.html를 b.ejs로 변경해보자
// ejs 사용가능하게 하는 명령어
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// DB 이니셜라이징
const mysql = require('mysql2')
const connection = mysql.createPool({
    host: "cnudb.soga.ng",
    user: "cnu",
    password: "r912",
    database: "cnu"
})
// 데이터베이스 시각화
// http://viewcnudb.soga.ng


// 얘도 복붙 
// 얘가 있어야 request.body 읽을 수 있음
app.use(express.urlencoded({ extended: true }))

app.use("/registerData", controlData)
function controlData(request, response) {
    var req = request.body;
    console.log(req)
    
    // DB에 가입 정보 삽입하기
    connection.query(`INSERT INTO user(user_name, user_age, user_phone)
VALUES(?,?,?)`, [req["id"], "21", req["phone"]], insertUser)
}

function insertUser(error, result, field) {

}