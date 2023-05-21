import { query } from "express";
import Model from "../models/index";


async function showAll (req,res) {
    try {
        let tag= await Model.TagModel.showAll();
        res.send(tag); 
      }
      catch(e) {
        res.send(e);
      }
}

async function insert (req,res) {
    let name = req.params.name;
    let mota = req.params.mota;
    try {
        Model.TagModel.insert (name,mota);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function update (req,res) {
    let id = req.params.id;
    let name = req.params.name;
    let mota = req.params.mota;
    try {
        Model.TagModel.update (id,name,mota);
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
        Model.TagModel.remove(id, isdeleted);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

module.exports = {
    showAll, insert,update, remove
}