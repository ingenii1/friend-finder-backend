//import momgoose library in order to use the mongoose model
const mongoose = require('mongoose');

//function which returns the current date: year and time
const d = new Date();
d.getFullYear();

//console.log("Friends since " + (d));

const friendSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    location:{
        type:String,
        required:true,
    },
    
    year: {
    type: Number,
    required: false,
    default: "None",
  },


});

const friendListModel = mongoose.model('Friends',friendSchema);

module.exports = friendListModel;