import mongoose, { Schema } from "mongoose";
const commentSchema =  new Schema(
    {
        content:{
            type:String,
            required:true,
        },
        blogId:{
            type:Schema.Types.ObjectId,
            ref:"blog",
        },
        createdBy :{
            type:Schema.Types.ObjectId,
            ref:"user",
        },
    },
    {timestamp:true}
);

const Comment = mongoose.model("Comment",commentSchema);

export default Comment ;