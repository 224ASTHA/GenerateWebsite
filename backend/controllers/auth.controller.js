import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

const googleAuth = async(req , res) => {
    try{
        const {username, email, avatar} = req.body

        if(!email){
            return res.status(400).json({
                message: "Email is required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            user = await User.create({username, email, avatar})
        }

        // Generate token
        const token = await jwt.sign(
            {id: user._id}, 
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })

        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({mssage: `Server side google auth error: ${error}`})
    }
}

const logOut = async(req,res) => {
    try{
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7*24*60*60*1000
        })
        return res.status(200).json({message: "log out successfully"})
    }catch(error){
        return res.status(500).json({message: `Logout server side eroor : ${error}`})
    }
}

export {
    googleAuth,
    logOut
}