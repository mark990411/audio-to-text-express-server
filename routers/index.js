const router=require('express').Router()

router.get('/',(req,res)=> res.json({status:"success"}));
// router.use('/auth',require('./auth.router'));
router.use('/audios',require('./audios.router'));
module.exports=router;