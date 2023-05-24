import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let tenTheLoai = req.params.tenTheLoai;
    let moTa = req.params.moTa;

    try {
        Model.TheLoai.create (tenTheLoai, moTa);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 


async function read(req,res) {
    try {
        let user= await Model.TheLoai.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function update (req,res) {
    let id = req.params.id;
    let tenTheLoai = req.params.tenTheLoai;
    let moTa = req.params.moTa;

  try {
      Model.TheLoai.update(id,tenTheLoai,moTa);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.TheLoai.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, read, update, del
}