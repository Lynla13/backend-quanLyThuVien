import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'muonSachChiTiet';

async function create(muonSach_id, sach_id,soLuong) {
    let content = 'muonSach_id, sach_id,soLuong';
    let val = "'"+muonSach_id+"','"+sach_id+"','"+soLuong+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByMuonSach (muonSach_id) {
    let condition = 'muonSach_id = "'+muonSach_id+'"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

module.exports = {
    create,readByMuonSach,
}