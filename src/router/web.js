import Controller from '../controllers/index';

module.exports = function(app) {

    // todoList Routes
    app.route('/users')
      .get(Controller.UserController.showAll);
    
    app.route('/')
      .get(Controller.HomeController.getPage)
  };