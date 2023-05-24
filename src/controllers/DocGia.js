import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let theThuVien_id = req.params.theThuVien_id;
    let hoTen = req.params.hoTen;
    let NgaySinh = req.params.NgaySinh;
    let sdt = req.params.sdt;

    try {
        Model.DocGia.create (theThuVien_id,hoTen,NgaySinh, sdt);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByTheThuVien(req,res) {
  let theThuVien_id = req.params.theThuVien_id;
  try {
      let user= await Model.DocGia.readByTheThuVien(theThuVien_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function update (req,res) {
    let theThuVien_id = req.params.theThuVien_id;
    let hoTen = req.params.hoTen;
    let NgaySinh = req.params.NgaySinh;
    let sdt = req.params.sdt;
  try {
      Model.DocGia.update(theThuVien_id,hoTen,NgaySinh,sdt);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let theThuVien_id = req.params.theThuVien_id;
    try {
        Model.DocGia.del(theThuVien_id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByTheThuVien,update,del
}