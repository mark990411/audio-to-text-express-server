const fs=require('fs')
const path=require('path');

exports.transcribe=(req,res)=>{
    if(!req.files) return res.json({status:"error",error:"NO_FILE"})
    const audioFile=req.files.file;
    console.log(audioFile)
    return res.json({status:"success"})
}