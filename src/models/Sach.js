import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'sach';

async function create(tenSach,tacGia,lanTaiBan, preview, preview_pic, id_theLoai) {
    let content = 'tenSach,tacGia,lanTaiBan,id_theLoai, preview, preview_pic';
    let val = "'"+tenSach+"','"+tacGia+"','"+lanTaiBan+"','"+id_theLoai+"', '"+preview+"', '"+preview_pic+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readBySearch (tenSach, limit =10, offset = 0) {
    let condition = 'tenSach LIKE "%'+tenSach+'%" LIMIT '+limit+' OFFSET '+offset+'';
    return Promise.resolve ( await BaseModel.getByCondition('theLoaiSach', condition));
}

async function readById_theLoai (id_theLoai , limit =10, offset = 0) {
    let condition = 'id_theLoai = "'+id_theLoai +'" LIMIT '+limit+' OFFSET '+offset+'';
    return Promise.resolve ( await BaseModel.getByCondition('theLoaiSach', condition));
}

async function readById_theLoaiNoLimit (id_theLoai) {
    let condition = 'id_theLoai = "'+id_theLoai +'"';
    return Promise.resolve ( await BaseModel.getByCondition('theLoaiSach', condition));
}

async function readById (id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition('theLoaiSach', condition));
}

async function readAllByLimit (orderBy, limit, offset) {
    return Promise.resolve ( await BaseModel.getAll('theLoaiSach',orderBy, limit, offset));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit('theLoaiSach'));
}

async function update (id,tenSach,tacGia,lanTaiBan, preview, preview_pic) {
    let val = 'tenSach = "'+tenSach+'", , tacGia = "'+tacGia+'", lanTaiBan = "'+lanTaiBan+'", preview = "'+preview+'", preview_pic = "'+preview_pic+'", sdt = "'+sdt+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}
module.exports = {
    create,readBySearch,readById, read,update,del, readAllByLimit, readById_theLoai, readById_theLoaiNoLimit 
}