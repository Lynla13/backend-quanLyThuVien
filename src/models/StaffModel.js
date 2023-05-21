import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'staff';

async function showAll() {
    let condition = 'isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition)); 
}

async function showByCondi (username) {
    let condition = 'username = "' +username+ '" AND isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showBySearch (username) {
    let condition = 'username LIKE  "'%+username%'" AND isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username, fullname,sdt) {
    let content = 'username, fullname, sdt';
    let val = "'"+username+"','"+fullname+"','"+sdt+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (username,fullname,sdt){
    let val = 'fullname = "'+fullname+'", sdt = "'+sdt+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function remove (username,isdeleted){
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function permanentRemove (username) {
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.removeV(table, condition));
}

module.exports = {
    showAll, showByCondi, showBySearch, insert, remove, update, permanentRemove 
}