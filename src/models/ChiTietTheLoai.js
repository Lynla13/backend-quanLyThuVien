import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'chiTietTheLoai';

async function create(theLoai_id, sach_id) {
    let content = 'theLoai_id, sach_id';
    let val = "'"+theLoai_id+"','"+sach_id+"'";
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
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}
module.exports = {
    create, readByTheLoai_id, readBySach_id,del
}