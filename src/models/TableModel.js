import { Callbacks } from "jquery";
import BaseModel from "./BaseModel";

//Create Table here
async function books() {
 let table = 'books';
 let contents= `
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
    name VARCHAR(255) NOT NULL,       
    price FLOAT,
    preview  VARCHAR (255),
    isdeleted INT,   
    theloai_id VARCHAR (100),
    create_at TIMESTAMP,
    updated_at TIMESTAMP,
    deteled_at TIMESTAMP`;
 return Promise.resolve (await BaseModel.createTable (table,contents));
 }

 async function theloai() {
    let table = 'theloai';
    let contents= `
       id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
       name VARCHAR(100) NOT NULL, 
       mota VARCHAR(255), 
       isdeleted INT,      
       create_at TIMESTAMP,
       updated_at TIMESTAMP,
       deteled_at TIMESTAMP `;
    return Promise.resolve (await BaseModel.createTable (table,contents));
    }

async function users() {
    let table = 'users';
    let contents= `
      username VARCHAR(100) NOT NULL PRIMARY KEY, 
      password VARCHAR(255),
      level INT,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
   }

async function profile() {
   let table = 'profile';
   let contents= `
      fullname VARCHAR(100) NOT NULL, 
      avatar_pic VARCHAR(255),
      background_pic VARCHAR (255),
      tenkhoa VARCHAR(255),
      tenlop VARCHAR(255),
      tennganh VARCHAR(255),
      masinhvien VARCHAR (100),
      isdeleted INT,
      username VARCHAR(100) NOT NULL,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function tusach() {
   let table = 'tusach';
   let contents= `
      book_id INT NOT NULL, 
      username VARCHAR (200) NOT NULL,
      isdeteled INT,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function follow() {
   let table = 'follow';
   let contents= `
      following VARCHAR (100) NOT NULL, 
      username VARCHAR (200) NOT NULL,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }
// Quản lý post nếu đăng ảnh thì cho isPicture = 1 và hiển thị giao 
//diện đăng ảnh sử lýn giao diện dùng (postpic)
async function post() {
   let table = 'post';
   let contents= `
      username VARCHAR (200) NOT NULL,
      id INT NOT NULL,
      content VARCHAR (200), 
      book_id INT NOT NULL,
      isPicture INT NOT NULL,
      isdeleted INT,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function postpic() {
   let table = 'postpic';
   let contents= `
      post_id INT NOT NULL,
      post_pic VARCHAR (100), 
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function camsuc() {
   let table = 'camsuc';
   let contents= `
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
      name VARCHAR (100) NOT NULL,
      mota VARCHAR (200), 
      username VARCHAR (200) NOT NULL,
      post_id INT NOT NULL,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function yeuthich() {
   let table = 'yeuthich';
   let contents= `
      book_id INT NOT NULL,
      username VARCHAR (200) NOT NULL,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function share() {
   let table = 'share';
   let contents= `
      book_id INT NOT NULL,
      username VARCHAR (200) NOT NULL,
      friend_name VARCHAR (200) NOT NUll,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

async function nofi() {
   let table = 'nofi';
   let contents= `
      username VARCHAR (200) NOT NULL,
      contents VARCHAR (200) NOT NUll,
      isdeleted INT,
      create_at TIMESTAMP,
      updated_at TIMESTAMP,
      deteled_at TIMESTAMP `;
   return Promise.resolve (await BaseModel.createTable (table,contents));
     }

 module.exports = {
    books, theloai,users,profile,tusach,camsuc,post,postpic,
    yeuthich, follow, share,nofi,
   }