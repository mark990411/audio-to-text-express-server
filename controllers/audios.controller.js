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
    audioFile.mv(path.resolve(__dirname,"../temp",audioFile.md5),()=>{
        axios.post('https://api.openai.com/v1/audio/transcriptions',{
            file:fs.createReadStream(path.resolve(__dirname,"../temp",uploading.md5)),
            model:"whisper-1"
        },{
           headers:{
            "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
           } 
        })
        .then(response=>{
            return res.json({status:"success",data:response.data})
        }).catch(e=>{
            return res,json({status:"error",error:e})
        })
        
    });
    
}