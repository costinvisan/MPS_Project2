const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    second_name: {
        type: String,
        trim: true,
        required: true
    },
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    diagnostic:{
        type: String,
        trim: true,
        required: true
    },
    id_doctor:{
        type: Number,
        trim: true,
        required: true
    },
    id_room:{
        type: Number,
        trim: true,
        required: true
    }
});

const Person= mongoose.model("persondatamessages", personSchema);

module.exports= Person;