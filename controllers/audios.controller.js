const fs=require('fs')
const path=require('path');

function createDirectoryIfNotExists(path) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      console.log('Directory created successfully.');
    } else {
      console.log('Directory already exists.');
    }
  }

exports.transcribe=(req,res)=>{
    if(!req.files) return res.json({status:"error",error:"NO_FILE"})
    const audioFile=req.files.file;
    console.log(audioFile);
    createDirectoryIfNotExists(path.resolve(__dirname,"../temp"));
    return res.json({status:"success"})
}