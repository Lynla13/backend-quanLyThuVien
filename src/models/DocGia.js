import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'docGia';

async function create(theThuVien_id, hoTen, NgaySinh, sdt) {
    let content = 'theThuVien_id, hoTen, NgaySinh, sdt';
    let val = "'"+theThuVien_id+"','"+hoTen+"','"+NgaySinh+"','"+sdt+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByTheThuVien (theThuVien_id) {
    let condition = 'theThuVien_id = "' +theThuVien_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function update (theThuVien_id, hoTen, NgaySinh, sdt) {
    let val = 'hoTen = "'+hoTen+'", NgaySinh = "'+NgaySinh+'", sdt = "'+sdt+'"';
    let condition = 'theThuVien_id = "'+theThuVien_id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (theThuVien_id) {
    let condition = 'theThuVien_id = "'+theThuVien_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,readByTheThuVien,update,del,
}