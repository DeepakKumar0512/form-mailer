const mongoose =require('mongoose');
const {Schema} = mongoose;

const FormSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone_no:{
        type:String,
        required:true    
    }
})
const Form = mongoose.model('form',FormSchema);
module.exports = Form; 