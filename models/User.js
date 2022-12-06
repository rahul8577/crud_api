const mongoose= require('mongoose');
const schema = mongoose.Schema;

const userSchema= new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const User = mongoose.model('users',userSchema);
module.exports=User;