import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'theLoai';

async function create(tenTheLoai, moTa) {
    let content = 'tenTheLoai, mota';
    let val = "'"+tenTheLoai+"','"+moTa+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function update (id,tenTheLoai, moTa) {
    let val = 'tenTheLoai = "'+tenTheLoai+'", moTa = "'+moTa+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,read,update,del,
}