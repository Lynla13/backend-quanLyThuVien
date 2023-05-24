import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let theThuVien_id = req.params.theThuVien_id;
    let nhanVien_id = req.params.nhanVien_id;
    let noiDung = req.params.noiDung;

    try {
        Model.ThongBao.create (theThuVien_id,nhanVien_id,noiDung);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 


async function readByNhanVien(req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    try {
        let user= await Model.ThongBao.readByNhanVien(nhanVien_id);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function readByDocGia(req,res) {
    let theThuVien_id = req.params.theThuVien_id;
    try {
        let user = await Model.ThongBao.readById(theThuVien_id);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.ThongBao.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readByNhanVien,readByDocGia,del
}