import { User } from "../modals/user.modal.js";
import bcrypt from 'bcrypt';
export const register=async(req,resp)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return resp.status(400).json({
            message:"Feild cannot be empty",
            success:false
        });
    }
    let isPresent=await User.findOne({email});
    if(isPresent){
        return resp.status(400).json({
            message:"User already exsist",
            success:false
        }); 
    }
    const hashPassword=await bcrypt.hash(password,10);
    const user=new User({
        name,email,password:hashPassword
    });
    user.save();
    return resp.status(200).json({
        message:"Registered Seuccessfully",
        success:true
    })
}