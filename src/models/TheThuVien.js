import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'theThuVien';

async function create(id, hanDung, nhanVien_id) {
    let content = 'id,hanDung, nhanVien_id';
    let val = "'"+id+"','"+hanDung+"','"+nhanVien_id+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByNhanVien (nhanVien_id) {
    let condition = 'nhanVien_id = "' +nhanVien_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function readById(id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}



async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function update (id,hanDung, nhanVien_id) {
    let val = 'hanDung = "'+hanDung+'", nhanVien_id = "'+nhanVien_id+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}
module.exports = {
    create,readByNhanVien,read,update,del,readById
}