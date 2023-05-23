import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'thongBao';

async function create(theThuVien_id,nhanVien_id, noiDung) {
    let content = 'theThuVien_id,nhanVien_id, noiDung';
    let val = "'"+theThuVien_id+"','"+nhanVien_id+"', ,'"+noiDung+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByNhanVien (nhanVien_id) {
    let condition = 'nhanVien_id = "' +nhanVien_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function readByDocGia (theThuVien_id) {
    let condition = 'theThuVien_id = "' +theThuVien_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}


async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,readByNhanVien,readByDocGia,del,
}