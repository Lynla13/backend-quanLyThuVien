import { query } from "express";
import Model from "../models/index";


async function showAll (req,res) {
    try {
        let user= await Model.UserModel.showAll();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
}

async function showBySearch (req,res) {
    let query = req.params.username;
    try {
        let user = await Model.UserModel.showBySearch(query);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      }
    
}

async function showByUsername (req,res) {
    let username = req.params.username;
    try {
        let user = await Model.UserModel.showByCondi(username);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      }
   
}

async function insert (req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let level = req.params.level || 0;
    try {
        Model.UserModel.insert (username,pass,level);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function update (req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let level = req.params.level || 0;
    try {
        Model.UserModel.update (username,pass,level);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

async function remove (req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let isdeleted = req.params.level || 1;
    try {
        Model.UserModel.remove(username, pass, isdeleted);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

module.exports = {
    showAll, showBySearch, insert,update, remove,showByUsername
}