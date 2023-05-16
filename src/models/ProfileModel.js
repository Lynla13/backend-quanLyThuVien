import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'profile';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi (value =[]) {
    let condition = 'username = "' +value [0]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'fullname, avatar_pic,background_pic, tenkhoa,tenlop. tennganh, masinhvien,username';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"','"+value[3]+"','"+value[4]+"','"+value[5]+"','"+value[6]+"','"+value[7]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function update (value = []){
    let value = 'fullname = "'+value[1]+'", avatar_pic ="'+value[2]+'",background_pic = "'+value[3]+'", tenkhoa = "'+value[4]+'", tenlop ="'+value[5]+'",tennganh = "'+value[6]+'", masinhvien = "'+value[7]+'"';
    let condition = 'username = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));

}

async function remove (value= [] ) {
    let value = 'isdeleted = "'+value[1]+'"';
    let condition = 'username = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.update(table,value, condition));
}

async function permanentRemove (value = []) {
    let condition = 'username = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi, insert, update, remove, permanentRemove
}