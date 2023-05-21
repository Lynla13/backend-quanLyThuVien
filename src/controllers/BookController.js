import { query } from "express";
import Model from "../models/index";


async function showAll (req,res) {
    try {
        let user= await Model.BookModel.showAll();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
}

async function showById (req,res) {
    let id = req.params.id;
    try {
        let user = await Model.BookModel.showByCondi_0(id);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      }
    
}

async function showByTag(req,res) {
    let id = req.params.id;
    try {
        let user = await Model.BookModel.showByCondi_0(id);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      } 
}

async function showBySearch (req,res) {
    let query = req.params.query;
    try {
        let user = await Model.BookModel.showByCondi_2(query);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      }
    
}

async function insert (req,res) {
    let name = req.params.name;
    let price = req.params.price;
    let preview = req.params.preview;
    let theloai = req.params.theloai;
    let author = req.params.author;

    try {
        Model.BookModel.insert (name,price,preview,theloai, author);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function update (req,res) {
    let id = req.params.id;
    let name = req.params.name;
    let price = req.params.price;
    let preview = req.params.preview;
    let theloai = req.params.theloai;
    let author = req.params.author;

    try {
        Model.BookModel.update (id,name,price,preview,theloai,author);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

async function remove (req,res) {
    let id = req.params.id;
    let isdeleted = req.params.level || 1;
    try {
        Model.BookModel.remove(id, isdeleted);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
    showAll, showById, showByTag, showBySearch, insert,update, remove
}