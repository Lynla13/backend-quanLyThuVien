import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let theLoai_id = req.params.theLoai_id;
    let sach_id = req.params.sach_id;

    try {
        Model.ChiTietTheLoai.create (theLoai_id, sach_id);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByTheLoai_id (req,res) {
  let theLoai_id = req.params.theLoai_id;
  try {
      let user= await Model.ChiTietTheLoai.readByTheLoai_id(theLoai_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function readBySach_id (req,res) {
  let sach_id = req.params.sach_id;
  try {
      let user= await Model.ChiTietTheLoai.readBySach_id(sach_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let theLoai_id = req.params.theLoai_id;
    let sach_id = req.params.sach_id;
    try {
        Model.ChiTietTheLoai.del(theLoai_id,sach_id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByTheLoai_id, readBySach_id, del
}