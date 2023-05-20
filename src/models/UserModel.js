import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'users';

async function showAll() {
    let condition = 'isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi (username) {
    let condition = 'username = "' +username+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showBySearch (username) {
    let condition = 'username LIKE  "'%+username%+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username,pass,level) {
    let content = 'username, password, level';
    let val = "'"+username+"','"+pass+"','"+level+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (username,pass,level){
    let val = 'password = "'+pass+'",level = "'+level+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function remove (username,pass,isdeleted){
    let val = 'password = "'+pass+'",isdeleted= "'+isdeleted+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}


async function permanentRemove (username) {
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}

module.exports = {
    showAll, showByCondi,showBySearch, insert, update, permanentRemove,remove
}
