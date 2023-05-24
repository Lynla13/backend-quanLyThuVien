import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let id = req.params.id;
    let tenNV = req.params.tenNV;
    let NgaySinh = req.params.NgaySinh;
    let sdt = req.params.sdt;

    try {
        Model.NhanVien.create (id,tenNV,NgaySinh,sdt);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByNhanVien(req,res) {
  let id = req.params.id;
  try {
      let user= await Model.NhanVien.readByNhanVien(id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function read(req,res) {
    try {
        let user= await Model.NhanVienModel.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function update (req,res) {
    let id = req.params.id;
    let tenNV = req.params.tenNV;
    let NgaySinh = req.params.NgaySinh;
    let sdt = req.params.sdt;
  try {
      Model.NhanVien.update(id,tenNV,NgaySinh,sdt);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.NhanVien.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByNhanVien,read, update,del
}