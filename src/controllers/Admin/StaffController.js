import Model from "../../models/index";


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
    res.json({maxpage: maxPage, page:page, Book:book}); 
    res.end();
}


//Hiện thị ảnh theo nhiều thể loại
async function showbyTags (req,res) {

}
//Hiển thị ảnh không có những thể loại
async function showNotByTags (req,res) {

}

async function insert (req,res) {
    const value = []; 
    value [0] = req.body.name;
    value [1] = req.body.price;
    value [2] = req.body.preview;
    value [3] = req.body.theloai;
    Model.BookModel.insert (value);
} 

async function update (req,res) {
    const value = []; 
    value [0] = req.body.id;
    value [1] = req.body.name;
    value [2] = req.body.price;
    value [3] = req.body.preview;
    value [4] = req.body.theloai;
    Model.BookModel.update (value = []);
} 

async function remove (req,res) {
    const value = []; 
    value [0] = req.body.id;
    value [1] = req.body.isdeleted;
    Model.BookModel.update (value = []);
} 

module.exports = {
   showAll,showbyTag,showbyTags,showNotByTags, showBySearch, insert,update, remove
}