import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'theloai';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (name, mota) {
    let content = 'name,mota';
    let val = "'"+name+"','"+mota+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (id,name, mota){
    let val = 'name = "'+name+'", mota = "'+mota+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}


async function remove (id,isdeleted){
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

module.exports = {
    showByCondi, insert, remove, showAll, update
}
