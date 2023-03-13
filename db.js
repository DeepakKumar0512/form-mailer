const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://MERNStack:deepak1234@cluster0.3jfjs.mongodb.net/deepak?retryWrites=true&w=majority"

async function connectToMongo(){
    await mongoose.connect(mongoURI)  
}
connectToMongo()
    .then(console.log("Connected to MongoDB"))
    .catch(err =>{console.log(err)})

module.exports =connectToMongo;