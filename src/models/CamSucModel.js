import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'camsuc';

async function showAll() {
    return Promise.resolve ( await BaseModel.getAllNoLimit(table));
}

async function showByCondi_0 (value =[]) {
    let condition = 'id = "' +value [0]+ '" AND post_id = "'+value[1]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

//Show by id and username
async function showByCondi_1 (value =[]) {
    let condition = 'id = "' +value [0]+ '" AND username = "'+value[1]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

//Show by name and post_id
async function showByCondi_2 (value =[]) {
    let condition = 'name = "' +value [0]+ '" AND post_id = "'+value[1]+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function insert (value = []) {
    let content = 'name, mota, username, post_id';
    let value = "'"+value[0]+"','"+value[1]+"','"+value[2]+"','"+value[3]+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,value));
}

async function permanentRemove (value = []) {
    let condition = 'id = "'+value[0]+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}


module.exports = {
    showAll, showByCondi_0, showByCondi_1, showByCondi_2, insert, permanentRemove
}