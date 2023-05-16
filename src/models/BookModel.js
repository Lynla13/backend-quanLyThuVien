import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'books';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (value =[]) {
    let condition = 'id = "' +value [0]+ '" OR name = "'+value [1]+'" OR theloai_id = "'+value[2]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'name, price, preview, theloai_id';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"','"+value[3]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function update (value = []){
    let value = 'name = "'+value[1]+'", price ="'+value[2]+'",preview = "'+value[3]+'", theloai_id = "'+value[4]+'"';
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));

}

async function remove (value= [] ) {
    let value = 'isdeleted = "'+value[1]+'"';
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));
}

async function permanentRemove (value = []) {
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi, insert, update, remove, permanentRemove
}
