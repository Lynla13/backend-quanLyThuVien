import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'nofi';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (value =[]) {
    let condition = 'username = "' +value [0]+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'username, content';
    let value = "'"+value[0]+"','"+value[1]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function remove (value= [] ) {
    let value = 'isdeleted = "'+value[1]+'"';
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));
}

async function permanentRemove (value = []) {
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi, insert, remove, permanentRemove
}