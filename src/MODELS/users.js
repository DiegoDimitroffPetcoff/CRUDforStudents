const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema({
    id:{type:Number, unique:true, require: true} ,
    name: String,
    email: String,
    skills: [String]
  });
module.exports = mongoose.model('User', userSchema);