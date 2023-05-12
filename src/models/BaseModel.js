import { Callbacks } from "jquery";
import pool from "../configs/connect_db";
//import connection from "../model/baseModel";

// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        pool.query(databaseQuery, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });
}
//create making database function
function createDatabase (database) {
    pool.query (`create database if not exists `+database+`;`);
}

//Create making table function
function createTable (table, contents) {
    pool.query (' CREATE TABLE IF NOT EXISTS '+table+' ( '+contents+');');
}

module.exports = {
    createDatabase, createTable, 
}