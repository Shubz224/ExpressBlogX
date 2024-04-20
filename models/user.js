import mongoose, { Schema } from "mongoose"

import  {createHmac , randomBytes} from "crypto"

import {createtokenforuser} from "../services/auth.js"

 const UserSchema  =   new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type :String,
        unique:true,
        require :true,
    },

    salt:{
        type:String,
       
    },
    password:{
      type:String,
      require:true,
    },
    email:{

        type:String,
        required:true,
    },
    profileImageURL:{
        type:String,
        default:'/public/images/default.png'
    },

    role:{
        type:String,
        enum: ["USER","ADMIN"],
        default:"USER",
    }
    

 },
 {timestamps:true}
);

UserSchema.pre('save', function (next){
    const user = this;

    if(!user.isModified("password")) return ;
    
     const salt = randomBytes(16).toString();
     const hashPassword = createHmac('sha256',salt)
     .update(user.password).
     digest("hex");

     this.salt =salt;
     this.password = hashPassword ;
     next();
});


UserSchema.static(
    "matchPasswordAndgeneratetoken",
 async function(email,password){
    const user = await this.findOne({email});
    if(!user)  throw new Error ('user not found !');

    const salt = user.salt;
    const hashPassword = user.password;

    const  userProvidedHash = createHmac("sha256",salt)
    .update(password)
    .digest("hex");

    if(hashPassword !== userProvidedHash)
     throw new Error ("incorrect password");
    
     const token =  createtokenforuser(user);
     return token ;

});

const User = mongoose.model('user',UserSchema);

export default User;