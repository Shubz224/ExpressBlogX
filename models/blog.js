import mongoose from "mongoose"

const blogSchema = mongoose.Schema({
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

},{timestamp:true});


const Blog = model('blog',blogSchema);

export default Blog;