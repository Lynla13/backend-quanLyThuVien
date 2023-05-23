import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    let the_id = req.params.the_id;
    let ngayMuon = req.params.ngayMuon;
    let hanTra = req.params.hanTra;

    try {
        Model.MuonSachModel.create (nhanVien_id,the_id,ngayMuon,hanTra);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readByNhanVien (req,res) {
  let nhanVien_id = req.params.nhanVien_id;
  try {
      let user= await Model.MuonSachModel.readByNhanVien(nhanVien_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function readByThe (req,res) {
  let the_id = req.params.the_id;
  try {
      let user= await Model.MuonSachModel.readByThe(the_id);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function update (req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    let the_id = req.params.the_id;

    try {
        Model.MuonSachModel.update (nhanVien_id,the_id);
        return res.send ('Update Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

async function del (req,res) {
    let id = req.params.id;
    try {
        Model.MuonSachModel.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create,readByNhanVien, readByThe,update,del,
}