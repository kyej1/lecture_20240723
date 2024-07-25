const UserModel = require("../models/UserModel.js")
async function registerUser(req,res){
    const {name, email, password, profile_pic} = req.body
    console.log(`name: ${name}`)

    const checkEmail = await UserModel.findOne({email})
    if (checkEmail){
        return res.status(400).json({
            message : "헉, 있는 사용자입니다. 다른 이메일을 사용해주세요."
        })
    }
    const payload = {
        name,
        email,
        password,
        profile_pic
    }

    const user = new UserModel(payload)
    const userSave = await user.save()

    return res.status(201).json({
        message: "wow! 회원등록이 성공되었습니다. 축하드려요!"
    })
        
}

module.exports = registerUser