import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let avatar = req.params.avatar;

    try {
        Model.Admin.create (username,pass, avatar);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByUsername(req,res) {
  let username = req.params.username;
  try {
      let user= await Model.Admin.readByUsername(username);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function logIn(req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    try {
        let user= await Model.Admin.logIn(username, pass);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }


async function update (req,res) {
    let username = req.params.username;
    let pass = req.params.pass;
    let avatar = req.params.avatar;
  try {
      Model.Admin.update(username,pass,avatar);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


module.exports = {
  create, readByUsername, update, logIn
}