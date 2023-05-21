import { query } from "express";
import Model from "../models/index";


async function showAll (req,res) {
    try {
        let staff = await Model.StaffModel.showAll();
        res.send(staff); 
      }
      catch(e) {
        res.send(e);
      }
}

async function showByUsername (req,res) {
    let username = req.params.username;
    try {
        let staff= await Model.StaffModel.showByCondi (username);
        res.send (staff) ;
      }
      catch(e) {
        res.send(e);
      }
}

async function insert (req,res) {
    let username = req.params.username;
    let fullname = req.params.fullname;
    let sdt = req.params.sdt;
    try {
        Model.StaffModel.insert (username,fullname,sdt);
        Model.UserModel.updateLevel (username,'1');
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function update (req,res) {
    let username = req.params.username;
    let fullname = req.params.fullname;
    let sdt = req.params.sdt;
    try {
        Model.StaffModel.update (username,fullname,sdt);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

async function remove (req,res) {
    let username = req.params.username;
    try {
        Model.StaffModel.permanentRemove(username)
        Model.UserModel.updateLevel (username,'0');
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

module.exports = {
    insert,update, remove, showByUsername,showAll
}