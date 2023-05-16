import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'post';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (value =[]) {
    let condition = 'id = "' +value [0]+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_1 (value =[]) {
    let condition = 'username in ('+value [0]+') order by create_at '+value[1]+'';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_2 (value =[]) {
    let condition = 'username = "' +value [0]+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'username, id, content, bool_id, isPicture';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"','"+value[3]+"','"+value[4]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function update (value = []){
    let value = 'username = "'+value[1]+'", content ="'+value[2]+'",book_id = "'+value[3]+'", isPicture = "'+value[4]+'"';
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
    showAll, showByCondi_0, showByCondi_1, showByCondi_2, insert, update, remove, permanentRemove
}