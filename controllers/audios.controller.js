const fs=require('fs')
const path=require('path');
const axios=require('axios')
const {Readable}=require('stream')
const FormData=require('form-data')
function createDirectoryIfNotExists(path) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      console.log('Directory created successfully.');
    } else {
      console.log('Directory already exists.');
    }
  }

exports.transcribe=async (req,res)=>{
    if(!req.files) return res.json({status:"error",error:"NO_FILE"})
    const audioFile=req.files.file;
    console.log(audioFile);
    // createDirectoryIfNotExists(path.resolve(__dirname,"../temp"));
    const stream= Readable.from(audioFile.data)
    const myForm=new FormData();
    myForm.append('file',stream,{filename:audioFile.name});
    myForm.append('model',"whisper-1");
    axios.post('https://api.openai.com/v1/audio/transcriptions',myForm,{
        headers:{
        "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`,
        ...myForm.getHeaders()
        } 
    })
    .then(response=>{
        return res.json({status:"success",data:response.data})
    }).catch(e=>{
        return res.json({status:"error",error:e})
    })
    // audioFile.mv(path.resolve(__dirname,"../temp",audioFile.name),async ()=>{
        
        
    // });
    
}