import Controller from '../controllers/index';

module.exports = function(app) {

    // User Router
    app.route('/muonsach/:nhanVien_id/:the_id/:ngayMuon/:hanTra')
      .post(Controller.MuonSachController.create)
    app.route('/muonsach/:nhanVCien_id/:the_id')
      .put(Controller.MuonSachController.update)
    app.route('/muonsach/:nhanVien_id')
      .get(Controller.MuonSachController.readByNhanVien)
    app.route('/muonsach/:the_id')
      .get(Controller.MuonSachController.readByThe)
    app.route('/muonsach/:id')
      .get(Controller.MuonSachController.del)
    

  };