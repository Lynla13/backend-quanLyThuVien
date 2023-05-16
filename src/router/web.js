import express from "express";
import TableControllers from "../controllers/TableController";
import HomeController from "../controllers/HomeController";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    //HomePage
    router.get('/', HomeController.getPage);

    //Admin 
    router.get('/createTable',TableControllers.createTable);
    return app.use('/', router);
}
export default initWebRouter
