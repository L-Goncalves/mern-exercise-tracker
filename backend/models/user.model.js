
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,  
    trim: true,
    minlength: 3,
    dropDups: true,
    unique: true,
  },
}, {
 
  timestamps: true,
});


const User = mongoose.model('User', userSchema);


module.exports = User;