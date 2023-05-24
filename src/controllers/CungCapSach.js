import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let YC_id = req.params.YC_id;
    let tongTien = req.params.tongTien;

    try {
        Model.CungCapSach.create (YC_id,tongTien);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByYC_id(req,res) {
  let YC_id = req.params.YC_id;
  try {
      let user= await Model.CungCapSach.readByYC_id(YC_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function update (req,res) {
    let YC_id = req.params.YC_id;
    let tongTien = req.params.tongTien;
  try {
      Model.CungCapSach.update(YC_id,tongTien);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.CungCapSach.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByYC_id,update,del
}