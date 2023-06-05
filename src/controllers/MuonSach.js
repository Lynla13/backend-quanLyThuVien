import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    let the_id = req.params.the_id;
    let sdt = req.params.sdt;
    let hanTra = req.params.hanTra;
    let sach_id = req.params.sach_id;
    let soLuong = req.params.soLuong;

    try {
        Model.MuonSach.create (nhanVien_id,the_id,sdt, hanTra, sach_id, soLuong);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByNhanVien (req,res) {
  let nhanVien_id = req.params.nhanVien_id;
  try {
      let user= await Model.MuonSach.readByNhanVien(nhanVien_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}




async function readByNhanVienByLimit (req,res) {
  let nhanVien_id = req.params.nhanVien_id;
  let limit = req.params.limit;
  let offset = req.params.offset;
  try {
      let user= await Model.MuonSach.readByNhanVien(nhanVien_id, limit, offset);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}




async function readByThe (req,res) {
  let the_id = req.params.the_id;
  try {
      let user= await Model.MuonSach.readByThe(the_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function update (req,res) {
    let id = req.params.id;
    let hanTra = req.params.hanTra
    let nhanVien_id = req.params.nhanVien_id;
    let the_id = req.params.the_id;

    try {
        Model.MuonSach.update (id,the_id,nhanVien_id,hanTra);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

async function del (req,res) {
    let id = req.params.id;
    try {
        Model.MuonSach.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create,readByNhanVien, readByThe,update,del,readByNhanVienByLimit
}