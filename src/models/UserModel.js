import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'users';

async function showAll() {
    let condition = 'isdeleted is null';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showBySearch (username) {
    let condition = 'username LIKE  "'%+username%'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username,pass,level) {
    let content = 'username, password, level';
    let val = "'"+username+"','"+pass+"','"+level+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (pass,username){
    let val = 'password = "'+pass+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function permanentRemove (username) {
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}

module.exports = {
    showAll, showByCondi,showBySearch, insert, update, permanentRemove
}