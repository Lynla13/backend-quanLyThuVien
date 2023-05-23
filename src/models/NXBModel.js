import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'NXB';

async function create(tenNXB, diaChi, sdt) {
    let content = 'tenNXB, diaChi, sdt';
    let val = "'"+tenNXB+"','"+diaChi+"','"+sdt+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function update (id,tenNXB, diaChi, sdt) {
    let val = 'tenNXB = "'+tenNXB+'", diaChi = "'+diaChi+'", sdt = "'+sdt+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create, read,update,del,
}