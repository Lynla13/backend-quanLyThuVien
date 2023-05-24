import { query } from "express";
import Model from "../models/index";


async function create  (req,res) {
    let YC_id = req.params.YC_id;
    let soLuong= req.params.soLuong;

    try {
        Model.YeuCauNhapChiTiet.create (YC_id,soLuong);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function read(req,res) {
    try {
        let user = await Model.YeuCauNhapChiTiet.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }


async function del (req,res) {
    let Yc_id = req.params.id;
    try {
        Model.YeuCauNhapChiTiet.del(Yc_id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, read,del
}