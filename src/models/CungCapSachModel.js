import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'cungCapSach';

async function create(YC_id, tongTien) {
    let content = 'YC_id, tongTien';
    let val = "'"+YC_id+"','"+tongTien_id+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByYC_id (YC_id) {
    let condition = 'YC_id = "' +YC_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}


async function update (id, YC_id, tongTien) {
    let val = 'YC_id= "'+YC_id+'", tongTien = "'+tongTien+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create, readByYC_id, update,del
}