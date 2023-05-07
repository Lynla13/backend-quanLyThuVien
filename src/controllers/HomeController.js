// import pool from "../configs/connect_db";
// import PostModel from "../models/PostModel";


function getPage (req,res) {
    return res.render ('index.ejs')
}
//Hiện thị tất cả ảnh
async function showAll (req,res) {

}
//Hiện thị ảnh theo 1 thể loại
async function showbyTag (req,res) {

}
//Hiện thị ảnh theo nhiều thể loại
async function showbyTags (req,res) {

}
//Hiển thị ảnh không có những thể loại
async function showNotByTags (req,res) {

}


module.exports = {
    getPage,showAll,showbyTag,showbyTags,showNotByTags
}