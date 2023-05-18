import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'post';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (id) {
    let condition = 'id = "' +id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_1 (usernames,order) {
    let condition = 'username in ('+usernames+') order by create_at '+order+'';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function showByCondi_2 (username) {
    let condition = 'username = "' +username+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (username,id,cont,book_id,isPicture) {
    let content = 'username, id, content, book_id, isPicture';
    let val = "'"+username+"','"+id+"','"+cont+"','"+book_id+"','"+isPicture+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function update (username, cont, book_id,isPicture){
    let val = 'username = "'+username+'", content ="'+cont+'",book_id = "'+book_id+'", isPicture = "'+isPicture+'"';
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));

}

async function remove (isdeleted,id) {
    let val = 'isdeleted = "'+isdeleted+'"';
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function permanentRemove (id) {
    let condition = 'id = "'+id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    showAll, showByCondi_0, showByCondi_1, showByCondi_2, insert, update, remove, permanentRemove
}