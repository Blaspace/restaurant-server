import User from '../schema/UserSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handleLogin =async (req, res)=>{
    const {email, password} = req.body
try{
    const user = await User.findOne({email})
    if(!user) return res.sendStatus(401)

    const verified = bcrypt.compare(password, user.password)
    if(verified){
        
        const accessToken = jwt.sign({email: user.email}, process.env.JWT_SECRETE, {
            expiresIn: '15d'
        })
        const i = await User.findOneAndUpdate({email},{accessToken})
        res.send({accessToken})
    }else{
        res.sendStatus(401)
    }

}catch (err){
    console.log(err);
    res.sendStatus(500)
}
}

export default handleLogin