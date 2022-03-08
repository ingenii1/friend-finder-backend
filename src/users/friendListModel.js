const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    
    actor:{
        type:String,
        required:true,
        default :'actor unknown',
        

    },
    
    year: {
    type: Number,
    required: false,
  },

  update: {
    type: String,
    required: false,
  },
});

const friendListModel = mongoose.model('Friends',friendSchema);

module.exports = friendListModel;