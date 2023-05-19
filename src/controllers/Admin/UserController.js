import Model from "../../models/index";


async function showAll (req,res) {
// Show user by Page
    //pagation function
    let user= await Model.UserModel.showAll();
    return res.send(user); 
}

async function showBySearch (req,res) {
    // Show userby Page
    //pagation function
    const value = []; 
    value [0] = req.params.query;
    let user= await Model.UserModel.showBySearch(value [0]);
    res.json({maxpage: maxPage, page:page, User:user}); 
    res.end();
}

//Show user profile 
async function showUserProfie (req,res) {
    const value = []; 
    value [0] = req.params.username;
    let user = await Model.UserModel.showByCondi(value [0]);
    let pageLimit = limit;
    if (user.length < limit) 
    {
        pageLimit = user.length;
    }
    let maxPage = Math.floor (user.length/pageLimit-1);
    let pageNum = req.params.page ||'1' ;
    let page = pageLimit*pageNum;
    res.json({maxpage: maxPage, page:page, User:user}); 
    res.end();
}

async function insert (req,res) {
    let username = req.body.name;
    let pass = req.body.name;
    let level = 0;
    Model.BookModel.insert (username,pass,level);
} 

async function update (req,res) {
    let username = req.body.name;
    let pass = req.body.name;
    let level = 0;
    Model.UserModel.insert (username,pass,level);
} 

async function remove (req,res) {
    let username = 'lynla'
    let isdeleted = '1';
    Model.UserModel.update(username, isdeleted);
} 

module.exports = {
    showAll, 
    showBySearch, insert,update, remove,showUserProfie
}