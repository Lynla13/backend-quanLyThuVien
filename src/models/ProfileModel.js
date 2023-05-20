import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'profile';

async function showByCondi (username) {
    let condition = 'username = "' +username+'" AND isdeleted != 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username,fullname, avatar_pic,background_pic,masinhvien) {
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


module.exports = {
    showByCondi, insert, update, remove
}