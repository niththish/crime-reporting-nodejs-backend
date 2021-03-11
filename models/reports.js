const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const reportSchema = new Schema({
    
    crimetype:
    {
        type:String,
        required:true,
    },
    description:
    {
        type:String,
    },
    latitude:
    {
        type:String,
        required:true,
    },
    longitude:
    {
        type:String,
        required:true,
    },
    area:
    {
        type:String,
    }

})

var reports=mongoose.model('reports',reportSchema);

module.exports = reports;