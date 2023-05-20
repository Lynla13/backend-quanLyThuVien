import { query } from "express";
import Model from "../models/index";



async function showByUsername (req,res) {
    let username = req.params.username;
    try {
        let user = await Model.ProfileModel.showByCondi(username);
        return res.send(user); 
      }
      catch(e) {
        return res.send(e);
      }
   
}

async function insert (req,res) {
    let username = req.params.username;
    let fullname = req.body.fullname;
    let avatar_pic = req.body.avatar_pic;
    let masinhvien = req.body.masinhvien;
    let background_pic = req.body.background_pic;
    try {
        Model.ProfileModel.insert (username,fullname,avatar_pic,background_pic,masinhvien);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function update (req,res) {
    let username = req.params.username;
    let fullname = req.body.fullname;
    let avatar_pic = req.body.avatar_pic;
    let masinhvien = req.body.masinhvien;
    let background_pic = req.body.background_pic;
    try {
        Model.ProfileModel.update (username,fullname,avatar_pic,background_pic,masinhvien);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

async function remove (req,res) {
    let username = req.params.username;
    let isdeleted = req.body.isdeleted || 1;
    try {
        Model.ProfileModel.remove(isdeleted,username);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
    
} 

module.exports = {
insert,update, remove, showByUsername
}