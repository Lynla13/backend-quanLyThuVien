import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'sach';

async function create(tenSach,tacGia,lanTaiBan, preview, preview_pic) {
    let content = 'tenSach,tacGia,lanTaiBan, preview, preview_pic';
    let val = "'"+tenSach+"','"+tacGia+"','"+lanTaiBan+"', '"+preview+"', '"+preview_pic+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readBySearch () {
    let condition = 'id LIKE "%' +id+ '%"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function update (id,tenSach,tacGia,lanTaiBan, preview, preview_pic) {
    let val = 'tenSach = "'+tenSach+'", , tacGia = "'+tacGia+'", lanTaiBan = "'+lanTaiban+'", preview = "'+preview+'", preview_pic = "'+preview_pic+'", sdt = "'+sdt+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,readBySearch, read,update,del
}