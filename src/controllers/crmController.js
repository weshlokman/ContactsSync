import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);
    
    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContacts = (req,res) => {
    Contact.find({}, (err,contact) => {
        if(err) {
            res.send(err)
        }
        res.json(contact)
    });
}

export const getContactsWithId = (req,res) => {
    Contact.findById(req.param.contactID, (err,contact) => {
        if(err) {
            res.send(err)
        }
        res.json(contact)
    });
}