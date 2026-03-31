import { generateResponse } from "../config/openrouter.js"
import extractJson from "../utils/extractJson.js"

const getCurrentUser = async(req,res) => {
    try{
        if(!req.user){
            return res.json({user: null})
        }
        return res.json(req.user)
    } catch(error){
        return res.status(500).json({message: `Get current user error : ${error}`})
    }
}

// const generatedemo = async(req, res) => {
//     try{
//         const result = await generateResponse("hello")
//         const data = await extractJson(result)
//         return res.status(200).json(data)
//     }catch(error){
//         console.log(error)
//         return res.status(500).json(error)
//     }
// }

export {getCurrentUser}