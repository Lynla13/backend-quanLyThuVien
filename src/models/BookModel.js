import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'books';

async function showAll (id) {
    let condition = 'isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_0 (id) {
    let condition = 'id = "' +id+ '"AND isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}
//Tag 
async function showByCondi_1 (theloai) {
    let condition = 'theLoai_id = "' +theloai+ '" AND isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_2 (query) {
    let condition = '(name LIKE  "'%+query%' OR preview LIKE  "'%+query%'" OR author LIKE  "'%+query%'") AND isdeleted = 0';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (name, price, preview,theloai, author) {
    let content = 'name, price, preview, theloai_id, author';
    let val = "'"+name+"','"+price+"','"+preview+"','"+theloai+"','"+author+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (id,name, price, preview, theloai, author){
    let val = 'name = "'+name+'", price ="'+price+'",preview = "'+preview+'", theloai_id = "'+theloai+'", author ="'+author+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function remove (id, isdeleted ) {
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function permanentRemove (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi_0,showByCondi_1, insert, update, remove, permanentRemove, showByCondi_2
}
