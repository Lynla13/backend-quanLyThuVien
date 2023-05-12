import pool from "../configs/connect_db";
import TableModel from "../models/TableModel";

// create all table
function createTable (req,res) {
    TableModel.books();
    TableModel.theloai();
    TableModel.users();
    TableModel.profile();
    TableModel.tusach();
    TableModel.camsuc();
    TableModel.post();
    TableModel.postpic();
    TableModel.yeuthich();
    TableModel.follow();
    return res.send ("thanh cong");
}

async function showAll (req,res) {

}
async function showbyTag (req,res) {

}
async function showbyTags (req,res) {

}
async function showNotByTags (req,res) {

}

module.exports = {
    createTable,
   }