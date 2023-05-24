import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let cungCap_id = req.params.cungCap_id;
    let sach_id = req.params.sach_id;
    let soLuong = req.params.soLong;
    let donGia = req.params.donGia;

    try {
        Model.CungCapSachChiTiet.create (cungCap_id,sach_id,soLuong,donGia);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByCungCap(req,res) {
  let cungCap_id = req.params.cungCap_id;
  try {
      let user= await Model.CungCapSachChiTiet.readByCungCap(cungCap_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function update (req,res) {
  let cungCap_id = req.params.cungCap_id; 
  let sach_id = req.params.sach_id;
  let soLuong = req.params.soLong; 
  let donGia = req.params.donGia;
  try {
      Model.CungCapSachChiTiet.update(cungCap_id,sach_id,soLuong,donGia);
      return res.send ('Update Successfull') ; 
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let cungCap_id = req.params.cungCap_id;
    let sach_id = req.params.sach_id;
    try {
        Model.CungCapSachChiTiet.del(cungCap_id,sach_id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByCungCap,update,del
}