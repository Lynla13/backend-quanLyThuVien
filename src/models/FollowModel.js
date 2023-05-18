import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'follow';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (following,username) {
    let condition = 'following = "' +following+ '" AND username = "'+username+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_1 (following) {
    let condition = 'following = "' +following+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_2 (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (following, username) {
    let content = 'following, username';
    let val = "'"+following+"','"+username+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function permanentRemove (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi_0, showByCondi_1, showByCondi_2, insert, permanentRemove
}