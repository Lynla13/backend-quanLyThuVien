import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'yeuCauNhapChiTiet';

async function create(YC_id, soLuong) {
    let content = 'YC_id, soLuong';
    let val = "'"+YC_id+"','"+soLuong+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function read () {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table, condition));
}

async function del (YC_id) {
    let condition = 'YC_id = "'+YC_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create,read,del,
}