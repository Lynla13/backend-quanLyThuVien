import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let muonSach_id = req.params.theThuVien_id;
    let sach_id = req.params.hoTen;
    let soLuong = req.params.NgaySinh;

    try {
        Model.MuonSachChiTiet.create (muonSach_id,sach_id,soLuong);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByMuonSach(req,res) {
    let muonSach_id = req.params.theThuVien_id;
  try {
      let user= await Model.MuonSachChiTiet.readByMuonSach(muonSach_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}


module.exports = {
  create,readByMuonSach
}