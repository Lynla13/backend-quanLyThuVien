import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

let table = 'cungCapSachChiTiet';

async function create(cungCap_id, sach_id, soLuong, DonGia) {
    let content = 'cungCap_id, sach_id, soLuong, DonGia';
    let val = "'"+cungCap_id+"','"+sach_id+"','"+soLuong+"','"+DonGia+"'";
    return Promise.resolve ( await BaseModel.insert(table, content,val));
}

async function readByCungCap (cungCap_id) {
    let condition = 'cungCap_id = "' +cungCap_id+ '"';
    return Promise.resolve ( await BaseModel.getByCondition(table, condition));
}

async function update (cungCap_id, sach_id, soLuong, DonGia) {
    let val = 'soLuong = "'+soLuong+'", DonGia = "'+DonGia+'"';
    let condition = 'cungCap_id = "'+cungCap_id+'" AND sach_id = "'+sach_id+'"';
    return Promise.resolve ( await BaseModel.update(table,val, condition));
}

async function del (cungCap_id, sach_id) {
    let condition = 'cungCap_id = "'+cungCap_id+'" AND sach_id = "'+sach_id+'"';
    return Promise.resolve ( await BaseModel.deteleValue(table, condition));
}
module.exports = {
    create, readByCungCap, update, del
}