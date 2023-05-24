import { query } from "express";
import file from "@babel/core/lib/transformation/file/file";
const fs     = require('fs');
import Model from "../models/index";

async function uploadImage (req, res) {
  //Upload photo
    let newImageName = 'eaut _'+ Date.now()+'_.jpg';
    let path     = '../public/img/'+req.params.filename;
    let image    = req.body.file;
    let data     = image.split(',')[1];
    fs.writeFileSync(path,data,{encoding:'base64'});
    let temp        = fs.readFileSync(path);
    let buff        = Buffer.from(temp);
    let base64data  = buff.toString('base64');
    //Change photo's name
    fs.renameSync('../public/img/'+req.body.filename, '../public/img/'+newImageName);
    res.json({msg:'success',data:base64data, imageName:newImageName});
}

// import data by ex files 
async function importData (req, res) {

}

async function create  (req,res) {
    let tenSach = req.params.tenSach;
    let tacGia = req.params.tacGia;
    let lanTaiBan = req.params.lanTaiBan;
    let preview = req.params.preview;
    let preview_pic = req.params.preview_pic;

    try {
        Model.Sach.create (tenSach,tacGia, lanTaiBan, preview,preview_pic);
        return res.send ('Insert Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
   
} 

async function readBySearch(req,res) {
  let tenSach = req.params.tenSach;
  try {
      let user= await Model.Sach.readBySach(tenSach);
      res.send(user); 
    }
    catch(e) {
      res.send(e);
    }
}

async function readById(req,res) {
    let id = req.params.id;
    try {
        let user= await Model.Sach.readBySach(id);
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function read(req,res) {
    try {
        let user= await Model.Sach.read();
        res.send(user); 
      }
      catch(e) {
        res.send(e);
      }
  }

async function update (req,res) {
    let id = req.params.id;
    let tenSach = req.params.tenSach;
    let tacGia = req.params.tacGia;
    let lanTaiBan = req.params.lanTaiBan;
    let preview = req.params.preview;
    let preview_pic = req.params.preview_pic;
  try {
      Model.Sach.update(id,tenSach,tacGia,lanTaiBan,preview,preview_pic);
      return res.send ('Update Successfull') ;
    }
    catch(e) {
      res.send(e);
    }
}


async function del (req,res) {
    let id = req.params.id;
    try {
        Model.Sach.del(id);
        return res.send ('Remove Successfull') ;
      }
      catch(e) {
        return res.send(e);
      }
} 

module.exports = {
  create, readBySearch,read, readById,update,del, uploadImage, importData 
}