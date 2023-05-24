import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'bangMuonSach';

async function create(nhanvien_id,the_id,hanTra) {
    let content = 'nhanvien_id,the_id,hanTra';
    let val = "'"+nhanvien_id+"','"+the_id+"','"+hanTra+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByNhanVien (nhanVien_id) {
    let condition = 'nhanVien_id = "' +nhanVien_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function readByThe (the_id) {
    let condition = 'the_id = "' +the_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function update (id,the_id, nhanVien_id, hanTra) {
    let val = 'the_id = "'+the_id+'", nhanVien_id = "'+nhanVien_id+'", hanTra = "'+hanTra+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}
module.exports = {
    create,readByNhanVien, readByThe,update,del,
}