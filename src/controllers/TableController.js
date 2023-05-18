import pool from "../configs/connect_db";
import Model from "../models/index";

// create all table
function createTable (req,res) {
    Model.TableModel.books();
    Model.TableModel.theloai();
    Model.TableModel.users();
    Model.TableModel.profile();
    Model.TableModel.tusach();
    Model.TableModel.camsuc();
    Model.TableModel.post();
    Model.TableModel.postpic();
    Model.TableModel.yeuthich();
    Model.TableModel.follow();
    Model.TableModel.nofi();
    Model.TableModel.share();
    Model.TableModel.staff();
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