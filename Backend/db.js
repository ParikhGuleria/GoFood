const { response } = require('express');
const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/goFood";

const connectToMongo= async ()=>{
    try{
      await mongoose.connect(mongoURI);
      
      console.log("Connected to Database...");
     const fetchallData= await mongoose.connection.db.collection("foodData");
     const data=await fetchallData.find().toArray();
     const fetchCategory=await mongoose.connection.db.collection("foodCategory");
     const catData=await fetchCategory.find().toArray();
      global.foodData=data;
      global.foodCategory=catData;
    }
    catch(error){
        console.error("Error Occuring while connecting to database",error)
    }
}

module.exports=connectToMongo;

