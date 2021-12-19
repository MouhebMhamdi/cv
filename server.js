constexpress=require('express');
constapp=expres();
constpath=require('path');
 
app.us(express.static(__dirname+'/dist/cv'));
 
app.listen(process.env.PORT||8080);
 
 
//PathLocationStradegy
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/cv/index.html'));
});
 
console.log('Console Listening'); 