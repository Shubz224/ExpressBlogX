import  {Router} from "express"

const router = Router();

router.get('/add-new', (req,res)=>{
    return  res.render('addBlog', {
        user:res.user,
    })
})
export default router;