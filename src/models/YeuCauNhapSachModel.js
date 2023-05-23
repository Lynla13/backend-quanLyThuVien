import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'yeucauNhapSach';

async function create(nhanVien_id,Nxb_id) {
    let content = 'nhanVien_id,Nxb_id';
    let val = "'"+nhanVien_id+"','"+Nxb_id+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,read,del,
}