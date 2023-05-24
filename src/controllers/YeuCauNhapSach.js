import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let nhanVien_id = req.params.nhanVien_id;
    let Nxb_id= req.params.Nxb_id;

    try {
        Model.YeuCauNhapSach.create (nhanVien_id,Nxb_id);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function read(req,res) {
    try {
        let user = await Model.YeuCauNhapSach.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.YeuCauNhapSach.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, read,del
}