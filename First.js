const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(Request,Response)=>{
    console.log(__dirname);
    Response.sendFile(__dirname+'/navihgation.html');
    
});

app.post('/save-person',(Request,Response)=>{
    console.log(Request.body);
    fs.appendFile('sachin.json',JSON.stringify(Request.body),(err)=>{
        if(err)throw err;
        console.log('File is Saved');
    });
    Response.send('your request arrived');

        
});
app.listen(8000,()=>{
    console.log('server is running');
});