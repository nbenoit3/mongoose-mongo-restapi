import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//Creating Schema model for Mongo DB tested in Postman :success
export const ContactSchema = new Schema({
    firstName:{
        type: String,
        required: "Enter first name"
    },
    lastName:{
        type: String,
        required: "Enter last name"
    },
    email:{
        type: String,
    },
    company:{
        type: String,
    },
    phone:{
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});