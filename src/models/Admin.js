import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'admin';

async function create(username, pass ,avatar) {
    let content = 'username, pass, avatar';
    let val = "'"+username+"','"+pass+"','"+avatar+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByUsername (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function logIn (username,pass) {
    let condition = 'username = "' +username+ '" AND pass = "' +pass+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function update (username, pass ,avatar) {
    let val = 'pass = "'+pass+'",avatar= "'+avatar+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}


module.exports = {
    create, readByUsername,update, logIn
}