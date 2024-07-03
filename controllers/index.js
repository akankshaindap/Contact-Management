import async_handler from 'express-async-handler'
import Contact from '../models/index.js'
export const getAllContacts=async_handler(async(req,res)=>{
    const contacts=await Contact.find()
    res.status(200).json(contacts)
});
export const getContact=async_handler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    res.status(200).json(contact)
    if(!contact){
        res.status(404);
        throw new Error("NOT FOUND")
    }
})
export const createContact= async_handler(async(req,res)=>{
    console.log("the request body is",req.body)
    const {name,email,contact}=req.body;
    if(!name||!email||!contact){
        res.status(400);
        throw new Error("All Fields are Mandatory")
    }
    const contacts=await Contact.create({
        name,
        email,
        contact
    })
    res.status(201).json(contacts)
})
export const updateContact=async_handler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    res.status(200).json(contact)
    if(!contact){
        res.status(404);
        throw new Error("NOT FOUND")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    
      res.status(200).json(updatedContact);
    });
    

export const deleteContact=async_handler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id)
    res.status(200).json(contact)
    if(!contact){
        res.status(404);
        throw new Error("NOT FOUND")
    }
    const deletedContact=await Contact.deleteOne();
    res.status(200).json(deletedContact)
})