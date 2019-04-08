import mongoose from 'mongoose'; // importing mongoose for mongo DB
import {ContactSchema} from '../models/crmModel'; // using Schema set up from crmModels file

const Contact = mongoose.model('Contact', ContactSchema); //creating mongo db model name contact referencing the Schema in CRM Models file


//Controller for adding new contact to database
export const addNewContact = (req, res)=>{
    let newContact = new Contact(req.body);
    newContact.save((err, contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};


//controller for getting contact from database
export const getContacts = (req,res) =>{
    Contact.find({}, (err, contact) =>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

//Controller for getting a specific contact from database
export const getContactWithID = (req,res)=>{
    Contact.findById(req.params.contactId , (err,contact)=>{
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
};

//Controller for updating contact in database
export const updateContact = (req,res)=>{
    Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new : true}, (err, contact)=>{
        if(err){
            res.send(err);
        }

        res.json(contact);
    });
};

//Controller for deleting in database

export const deleteContact = (req, res) =>{
    Contact.remove({_id: req.params.contactId}, (err, contact)=>{
        if(err){
            res.send(err);
        }

        res.json({message: 'Deleted Contact'})
    });
}
