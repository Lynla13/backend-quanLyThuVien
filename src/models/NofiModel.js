import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'nofi';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username,cont) {
    let content = 'username, content';
    let val = "'"+username+"','"+cont+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function remove (id,isdeleted ) {
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function permanentRemove (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi, insert, remove, permanentRemove
}