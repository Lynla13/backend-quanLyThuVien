import Controller from '../controllers/index';

module.exports = function(app) {

    // User Route
    app.route('/user')
      .get(Controller.UserController.showAll)
      .post (Controller.UserController.insert)
      .put (Controller.UserController.update)
      .delete (Controller.UserController.remove);

    app.route ('/user/:username')
      .get (Controller.UserController.showByUsername)
      
    app.route ('/user/s=:username')
      .get (Controller.UserController.showBySearch);
    
    //Profile
    app.route ('/profile/:username')
      .get (Controller.ProfileController.showByUsername)
      .post (Controller.ProfileController.insert)
      .put (Controller.ProfileController.update)
      .delete (Controller.ProfileController.remove)
  };
