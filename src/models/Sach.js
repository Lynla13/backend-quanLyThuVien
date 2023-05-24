import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'sach';

async function create(tenSach,tacGia,lanTaiBan, preview, preview_pic) {
    let content = 'tenSach,tacGia,lanTaiBan, preview, preview_pic';
    let val = "'"+tenSach+"','"+tacGia+"','"+lanTaiBan+"', '"+preview+"', '"+preview_pic+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readBySearch (tenSach) {
    let condition = 'tenSach LIKE "%' +tenSach+ '%"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function readById (id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}


async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
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
    create,readBySearch,readById, read,update,del
}