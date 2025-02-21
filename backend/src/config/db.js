const mongoose=require('mongoose');
MONGO_URI="mongodb+srv://kanishkraval1:BvymMyCgsBf7vu1L@cluster0.84syn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
require('dotenv').config();
const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(MONGO_URI);
    // mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDb connected: ${conn.connection.host}`);
  }catch(error){
    console.error(`Error:${error.message}`);
    process.exit(1)
    
  }
}

module.exports=connectDB;