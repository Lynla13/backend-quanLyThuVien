import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'camsuc';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (id,post_pid) {
    let condition = 'id = "' +id+ '" AND post_id = "'+post_id+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

//Show by id and username
async function showByCondi_1 (id,username) {
    let condition = 'id = "' +id+ '" AND username = "'+username+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

//Show by name and post_id
async function showByCondi_2 (username,post_id) {
    let condition = 'name = "' +username+ '" AND post_id = "'+post_id+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (name,mota,username,post_id) {
    let content = 'name, mota, username, post_id';
    let val = "'"+name+"','"+mota+"','"+username+"','"+post_id+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function permanentRemove (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi_0, showByCondi_1, showByCondi_2, insert, permanentRemove
}