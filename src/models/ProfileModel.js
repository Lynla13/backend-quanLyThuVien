import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'profile';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (username) {
    let condition = 'username = "' +username+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (fullname, avatar_pic,background_pic,masinhvien,username) {
    let content = 'fullname, avatar_pic,background_pic, masinhvien,username';
    let val = "'"+fullname+"','"+avatar_pic+"','"+background_pic+"','"+masinhvien+"','"+username+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (username, fullname, avatar_pic, background_pic, masinhvien){
    let val = 'fullname = "'+fullname+'", avatar_pic ="'+avatar_pic+'",background_pic = "'+background_pic+'", masinhvien = "'+masinhvien+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function remove (isdeleted,username ) {
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function permanentRemove (username) {
    let condition = 'username = "'+username+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, update, remove, permanentRemove
}