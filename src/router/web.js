import Controller from '../controllers/index';

module.exports = function(app) {

    // User Router
    app.route('/user')
      .get(Controller.UserController.showAll)
      .post (Controller.UserController.insert)
      .put (Controller.UserController.update)
      .delete (Controller.UserController.remove);

    app.route ('/user/:username')
      .get (Controller.UserController.showByUsername)
      
    app.route ('/user/s=:username')
      .get (Controller.UserController.showBySearch);
    
    //Profile Router
    app.route ('/profile/:username')
      .get (Controller.ProfileController.showByUsername)
      .post (Controller.ProfileController.insert)
      .put (Controller.ProfileController.update)
      .delete (Controller.ProfileController.remove);
    
    //Book router

  app.route ('/book')
    .get (Controller.BookController.showAll)
    .post (Controller.BookController.insert);

  app.route ('/book/:id')
    .get (Controller.BookController.showById)
    .put (Controller.BookController.update)
    .delete (Controller.BookController.remove);

  app.route ('/book/s=:query')
    .get (Controller.BookController.showBySearch)
  
  app.route ('/book/tag_id=:id')
    .get (Controller.BookController.showByTag);

  // Tag Router
  };
