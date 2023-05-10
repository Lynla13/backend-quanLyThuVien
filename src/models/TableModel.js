import { Callbacks } from "jquery";
import baseModel from "./baseModel";

let table = 'book';

//Create Table here
async function books() {
 let table = 'books';
 let contents= `
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
    name VARCHAR(255) NOT NULL,       
    price FLOAT,
    preview  VARCHAR (255),
    theloai_id VARCHAR (100),
    create_at TIMESTAMP,
    updated_at TIMESTAMP,
    deteled_at TIMESTAMP       
                `;
 return Promise.resolve (await BaseModel.creteTable (table,contents));
 }

 async function theloai() {
    let table = 'theloai';
    let contents= `
       id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,   
       name VARCHAR(100) NOT NULL, 
       mota VARCHAR(255),       
       parent_id INT,   
       create_at TIMESTAMP,
       updated_at TIMESTAMP,
       deteled_at TIMESTAMP       
                   `;
    return Promise.resolve (await BaseModel.creteTable (table,contents));
    }

 module.exports = {
    books, theloai
   }