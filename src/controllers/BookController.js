import Model from "../models/index";


const limit = 30;

async function showAll (req,res) {
// Show book by Page
    //pagation function
    let book = await Model.BookModel.showAll();
    let pageLimit = limit;
    if (book.length<limit) 
    {
        pageLimit = book.length;
    }
    let maxPage = Math.floor (book.length/pageLimit-1);
    let pageNum = req.params.page ||'1' ;
    let page = pageLimit*pageNum;
    res.json({maxpage: maxPage, page:page, Book:book}); 
    res.end();

}

async function showBySearch (req,res) {
    // Show book by Page
    //pagation function
        const value = []; 
        value [0] = req.params.query;
        let book = await Model.BookModel.showByCondi_2(value [0]);
        let pageLimit = limit;
        if (book.length < limit) 
        {
            pageLimit = book.length;
        }
        let maxPage = Math.floor (book.length/pageLimit-1);
        let pageNum = req.params.page ||'1' ;
        let page = pageLimit*pageNum;
        res.json({maxpage: maxPage, page:page, Book:book}); 
        res.end();
}

//Hiện thị ảnh theo 1 thể loại
async function showbyTag (req,res) {
    const value = []; 
    value [0] = req.params.query;
    let book = await Model.BookModel.showByCondi_1(value [0]);
    let pageLimit = limit;
    if (book.length < limit) 
    {
        pageLimit = book.length;
    }
    let maxPage = Math.floor (book.length/pageLimit-1);
    let pageNum = req.params.page ||'1' ;
    let page = pageLimit*pageNum;
    res.end(JSON.stringify({maxpage: maxPage, page:page, Book:book})); 
}


//Hiện thị ảnh theo nhiều thể loại
async function showbyTags (req,res) {

}
//Hiển thị ảnh không có những thể loại
async function showNotByTags (req,res) {

}

async function insert (req,res) {
    name = req.body.name;
    price = req.body.price;
    preview = req.body.preview;
    theloai = req.body.theloai;
    Model.BookModel.insert (name,price,preview,theloai);
} 

async function update (req,res) {
    id = req.body.id;
    name = req.body.name;
    price = req.body.price;
    preview = req.body.preview;
    theloai = req.body.theloai;
    Model.BookModel.update (id,name,price,preview,theloai);
} 

async function remove (req,res) {
    id = req.body.id;
    isdeleted = '1';
    Model.BookModel.update (id,isdeleted);
} 

module.exports = {
    showAll,showbyTag,showbyTags,showNotByTags, showBySearch, insert,update, remove
}