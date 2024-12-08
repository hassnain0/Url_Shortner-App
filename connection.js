const mongoose=require('mongoose');

async function connectDb(url) {
   return await mongoose.connect((url)).then(()=>{console.log("Database is Connected")}).catch((err)=>{console.log("Error Occured",err)})
     
}

module.exports={
    connectDb,
}