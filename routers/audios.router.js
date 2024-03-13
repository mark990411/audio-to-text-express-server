const router=require('express').Router();
const audiosController=require('../controllers/audios.controller');
router.post('/transcribe',audiosController.transcribe)

module.exports=router;