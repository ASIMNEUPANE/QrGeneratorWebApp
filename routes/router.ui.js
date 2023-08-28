const router = require('express').Router()


router.use('/',(req,res,next)=>{
try{

res.render("index");

}
catch(e){
    next(e)
}
})





module.exports= router