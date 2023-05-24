import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let id = req.params.id;
    let hanDung = req.params.hanDng;
    let nhanVien_id = req.params.nhanVien_id;

    try {
        Model.TheThuVien.create (id, hanDung,nhanVien_id);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 


async function readByNhanVien(req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    try {
        let user= await Model.TheThuVien.readByNhanVien(nhanVien_id);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function readById(req,res) {
    let id = req.params.id;
    try {
        let user = await Model.TheThuVien.readById(id);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function read(req,res) {
    try {
        let user= await Model.TheThuVien.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function update (req,res) {
    let id = req.params.id;
    let hanDung = req.params.hanDng;
    let nhanVien_id = req.params.nhanVien_id;
  try {
      Model.TheThuVien.update(id,hanDung,nhanVien_id);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.TheThuVien.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByNhanVien,readById,read, update,del
}