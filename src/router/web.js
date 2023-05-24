import Controller from '../controllers/index';

module.exports = function(app) {

    // MuonSach Router
    app.route('/muonsach/:nhanVien_id/:the_id/:hanTra')
      .post(Controller.MuonSach.create)
    app.route('/muonsach/:id/:the_id/:nhanVien_id/:hanTra')
      .put(Controller.MuonSach.update)
    app.route('/muonsach/nv=:nhanVien_id')
      .get(Controller.MuonSach.readByNhanVien)
    app.route('/muonsach/dg=:the_id')
      .get(Controller.MuonSach.readByThe)
    app.route('/muonsach/:id')
      .delete(Controller.MuonSach.del)
    
    // MuonSach Router
    app.route('/chitiettheloai/:theLoai_id/:sach_id')
      .post(Controller.ChiTietTheLoai.create)
    app.route('/chitiettheloai/tl=:theLoai_id')
      .get(Controller.ChiTietTheLoai.readByTheLoai_id)
    app.route('/chitiettheloai/s=:sach_id')
      .get(Controller.ChiTietTheLoai.readBySach_id)
    app.route('/chitiettheloai/:theLoai_id/:sach_id')
      .delete(Controller.ChiTietTheLoai.del)
  };