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


// /main 페이지를 접속했을 때의 작업을 b 함수에서 정의
app.use("/main", b)

function b(request, response) {
    // 사용자에게 텍스트만 보여주기
    // response.send("Welcome to main page")

    // 사용자에게 html(ejs) 파일을 보여주기
    response.render("b.ejs")
}