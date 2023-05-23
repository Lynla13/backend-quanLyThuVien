import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'chiTietTheLoai';

async function create(nhanvien_id,the_id,ngayMuon,hanTra) {
    let content = 'nhanvien_id,the_id,ngayMuon,hanTra';
    let val = "'"+nhanvien_id+"','"+the_id+"','"+ngayMuon+"','"+hanTra+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByTheLoai_id (theLoai_id) {
    let condition = 'theLoai_id = "' +theLoai_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function readBySach_id (sach_id) {
    let condition = 'sach_id = "' +sach_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}


async function del (theLoai_id, sach_id) {
    let condition = 'theLoai_id = "'+theLoai_id+'" AND sach_id = "'+sach_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create, readByTheLoai_id, readBySach_id,del
}