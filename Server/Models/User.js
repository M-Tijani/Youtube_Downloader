const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    downloadlimit: {
      object: {
        date: {
          type: Date,
          default: Date.now
        },
        num: {
          type: Number,
          default: 0
        }
      }
    }
  });
  
  userSchema.pre('save' , async function (next){
    try{
        const hash = await bcrypt.hash(this.password , 11);
        next()
    }catch{
        next('error')
    }
  })

  const User = mongoose.model('User' ,userSchema , 'user');
  module.exports = User;