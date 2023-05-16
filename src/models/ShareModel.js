import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'share';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (value =[]) {
    let condition = 'username = "' +value [0]+'" AND book_id = "' +value [1]+'" AND friend_name = "' +value [2]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'book_id, username,friend_name';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}


async function permanentRemove (value = []) {
    let condition = 'username = "'+value[0]+'" AND book_id = "'+value[1]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, permanentRemove
}