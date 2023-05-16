import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'users';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (value =[]) {
    let condition = 'username = "' +value [0]+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'username, password, level';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function update (value = []){
    let value = 'password = "'+value[1]+'"';
    let condition = 'username = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));

}

async function permanentRemove (value = []) {
    let condition = 'username = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi, insert, update, permanentRemove
}
