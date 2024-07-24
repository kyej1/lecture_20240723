const mongoose = require('mongoose')

async function connectDB(){
    //몽구스라는 라이브러리를 통해 우리가 만든 몽고와 db와 연결할꺼!
    await mongoose.connect(process.env.MONGODB_URI)
}

module.exports = connectDB