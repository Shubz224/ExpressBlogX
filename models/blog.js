import mongoose, { Schema } from "mongoose"

const blogSchema =  new Schema({
    title:{
        type:String,
        required :true,
    },

    body:{
      type:String,
      required:true,
    },
    coverImageUrl:{
        type:String,
        required:false,
    },
    createBy:{
            type: Schema.Types.ObjectId,
            ref : 'user',
    },

},
{timestamp:true}
);


const Blog = mongoose.model('blog',blogSchema);

export default Blog;