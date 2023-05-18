import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'share';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (username, book_id, friend_name) {
    let condition = 'username = "' +username+'" AND book_id = "' +book_id+'" AND friend_name = "' +friend_name+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (book_id,username,friend_name) {
    let content = 'book_id, username,friend_name';
    let val = "'"+book_id+"','"+username+"','"+friend_name+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}


async function permanentRemove (username, book_id) {
    let condition = 'username = "'+username+'" AND book_id = "'+book_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, permanentRemove
}