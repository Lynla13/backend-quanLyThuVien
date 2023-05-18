import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'postpic';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (post_id) {
    let condition = 'post_id = "' +post_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (post_id,post_pic) {
    let content = 'post_id, post_pic';
    let val = "'"+post_id+"','"+post_pic+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (id,post_pic){
    let val = 'post_pic = "'+post_pic+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function permanentRemove (post_id) {
    let condition = 'post_id = "'+post_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, update, permanentRemove
}