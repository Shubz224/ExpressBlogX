import  {Router} from "express";
const router = Router();
import multer from "multer";
import path from "path"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/upload'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })



router.get('/add-new', (req,res)=>{
    return  res.render('addBlog', {
        user: req.user,
    });
})
router.post("/",(req,res)=>{
    console.log(req.body);
})

export default router;
