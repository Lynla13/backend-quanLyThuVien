import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'staff';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showBySearch (username) {
    let condition = 'username LIKE  "'%+username%'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username, fullname,sdt) {
    let content = 'username, fullname, sdt';
    let val = "'"+username+"','"+fullname+"','"+sdt+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function remove (username,isdeleted){
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function permanentRemove (username) {
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi, showBySearch, insert, remove, permanentRemove
}
