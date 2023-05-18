import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'tusach';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (username,book_id) {
    let condition = 'username = "' +username+'" AND book_id = "' +book_id+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (book_id,username) {
    let content = 'book_id, username';
    let val = "'"+book_id+"','"+vusername+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}


async function permanentRemove (username, book_id) {
    let condition = 'username = "'+username+'" AND book_id = "'+book_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, permanentRemove
}