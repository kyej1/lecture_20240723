const express = require('express')
const router = require('./router/index.js')
require('dotenv')
const connectDB = require('./config/connectDB.js')

const app = express()

app.get("/", (req,res)=>{
    res.send("<h1>나의 웹서버에 오신것을 환영합니다.</h1>")
})
app.use('/api',router)
app.set("view engine", "ejs") //화면 엔진을 ejs로 설정한다.라는 뜻(기본폴더는 /views이다)

connectDB().then(()=>{
    console.log(`WoW 내가 만든 몽고db랑 연결 성공했음요.`)
})

app.listen(8080, ()=> {
    console.log(`웹서버가 실행되었습니다.`)
})