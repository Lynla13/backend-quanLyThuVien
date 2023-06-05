import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'theLoai';

async function create(tenTheLoai, moTa) {
    let content = 'tenTheLoai, mota';
    let val = "'"+tenTheLoai+"','"+moTa+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function readAllByLimit (orderBy, limit, offset) {
    return Promise.resolve ( await BaseModel.getAll(table,orderBy, limit, offset));
}


async function readBySearch (tenTheLoai) {
    let condition = 'tenTheLoai LIKE "%'+tenTheLoai+'%" LIMIT 10';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function update (id,tenTheLoai, moTa) {
    let val = 'tenTheLoai = "'+tenTheLoai+'", moTa = "'+moTa+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}

async function delAll () {
    return Promise.resolve ( await BaseModel.removeAll(table));
}
module.exports = {
    create,read,update,del,readBySearch, readAllByLimit, delAll
}