import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'nhanVien';

async function create(id,tenNV, ngaySinh, sdt) {
    let content = 'id,tenNV, ngaySinh, sdt';
    let val = "'"+id+"','"+tenNV+"','"+ngaySinh+"','"+sdt+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByNhanVien (id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function update (id,tenNV, ngaySinh, sdt) {
    let val = 'tenNV = "'+tenNV+'", ngaySinh = "'+ngaySinh+'", sdt = "'+sdt+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}
module.exports = {
    create,readByNhanVien, read,update,del,
}