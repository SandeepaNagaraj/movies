const mongoose=require('mongoose');
const moviesSchema=new mongoose.Schema({
    moviename:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    releasedDate:{
        type:String,
        required:true
    },
    ratings:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model('moviesModel',moviesSchema)