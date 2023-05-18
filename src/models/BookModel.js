import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'books';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (id,name,theloai) {
    let condition = 'id = "' +id+ '" OR name = "'+name+'" OR theloai_id = "'+theloai+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}
//Tag 
async function showByCondi_1 (theloai) {
    let condition = 'theLoai_id = "' +theloai+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_2 (name,preview) {
    let condition = 'name LIKE  "'%+name%' OR preview LIKE  "'%+preview%'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (name, price, preview,theloai) {
    let content = 'name, price, preview, theloai_id';
    let val = "'"+name+"','"+price+"','"+preview+"','"+theloai+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (id,name, price, preview, theloai){
    let val = 'name = "'+name+'", price ="'+price+'",preview = "'+preview+'", theloai_id = "'+theloai+'"';
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
