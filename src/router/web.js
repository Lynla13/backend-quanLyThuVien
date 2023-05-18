import express from "express";
import Controller from "../controllers/index";

let router = express.Router();

//Khoi tao web router
const initWebRouter = (app) => {
    //HomePage
    router.get('/', Controller.HomeController.getPage);

    //Admin 
    router.get('/createTable',Controller.TableController.createTable);
    //Admin > User 
    router.get('/admin/user',Controller.UserController.showAll);
    router.get('/admin/user/s:query',Controller.UserController.showAll);
    router.post('/admin/user/delete',Controller.UserController.remove);
    router.post('/admin/user/insert',Controller.UserController.insert);
    router.post('/admin/user/update',Controller.UserController.update);

    return app.use('/', router);
}
export default initWebRouter
