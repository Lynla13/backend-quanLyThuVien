import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let tenNXB = req.params.tenNXB;
    let diaChi = req.params.diaChi;
    let sdt = req.params.sdt;

    try {
        Model.NXB.create (tenNXB,diaChi,sdt);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 


async function read(req,res) {
    try {
        let user= await Model.NXBModel.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function update (req,res) {
    let id = req.params.id;
    let tenNXB = req.params.tenNXB;
    let diaChi = req.params.diaChi;
    let sdt = req.params.sdt;
  try {
      Model.NXB.update(id,tenNXB,diaChi,sdt);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.NXB.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create,read, update,del
}