import Controller from '../controllers/index';

module.exports = function(app) {

    // User Router
    app.route('/user')
      .get(Controller.UserController.showAll)
    app.route('/user/:username/:pass/:level')
      .post (Controller.UserController.insert)
      .put (Controller.UserController.update)
    app.route ('/user/:username/:pass/:isdeleted')
      .delete (Controller.UserController.remove);
    app.route ('/user/:username')
      .get (Controller.UserController.showByUsername);      
    app.route ('/user/s=:username')
      .get (Controller.UserController.showBySearch);
    
    //Profile Router
    app.route ('/profile/:username')
      .get (Controller.ProfileController.showByUsername);
    app.route ('/profile/:username/:fullname/:avatar_pic/:masinhvien/:background_pic')
      .post (Controller.ProfileController.insert)
      .put (Controller.ProfileController.update);
    app.route ('/profile/:username/:isdeleted')    
      .delete (Controller.ProfileController.remove);
    
    //Book router

  app.route ('/book')
    .get (Controller.BookController.showAll)
  app.route ('/book/:name/:price/:review/:author')
    .post (Controller.BookController.insert);
  app.route ('/book/:id')
    .get (Controller.BookController.showById)
  app.route ('/book/:id/:name/:price/:preview/:author')
    .put (Controller.BookController.update)
  app.route ('/book/:id/:isdeteled')
    .delete (Controller.BookController.remove);
  app.route ('/book/s=:query')
    .get (Controller.BookController.showBySearch);  
  app.route ('/book/tag_id=:id')
    .get (Controller.BookController.showByTag);

  // Tag Router
  app.route ('/tag')
    .get (Controller.TagController.showAll);
  app.route('/tag/:name/:mota')
    .post (Controller.TagController.insert)
    .put (Controller.TagController.update);
  app.route ('/tag/:id/:isdeleted')    
    .delete (Controller.TagController.remove);

  // Staff Router
  app.route ('/staff')
    .get (Controller.StaffController.showAll);
  app.route ('/staff/:username')
    .get (Controller.StaffController.showByUsername);
  app.route ('/staff/:username/:fullname/:sdt')
    .post (Controller.StaffController.insert)
    .put (Controller.StaffController.update);
  app.route ('/staff/:username')    
    .delete (Controller.StaffController.remove);

  };