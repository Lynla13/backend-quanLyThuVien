import Controller from '../controllers/index';

module.exports = function (app) {

  // MuonSach Router
  app.route('/muonsach/:nhanVien_id/:the_id/:sdt/:hanTra/:sach_id/:soLuong')
    .post(Controller.MuonSach.create)
  app.route('/muonsach/:id/:the_id/:nhanVien_id/:hanTra')
    .put(Controller.MuonSach.update)
  app.route('/muonsach/nv=:nhanVien_id')
    .get(Controller.MuonSach.readByNhanVien)

  app.route('/muonsach/nv=:nhanVien_id/l=:limit/:offset')
    .get(Controller.MuonSach.readByNhanVienByLimit)
  app.route('/muonsach/dg=:the_id')
    .get(Controller.MuonSach.readByThe)
  app.route('/muonsach/:id')
    .delete(Controller.MuonSach.del)

  // ChiTietTheLoai Router
  app.route('/chitiettheloai/:theLoai_id/:sach_id')
    .post(Controller.ChiTietTheLoai.create)
  app.route('/chitiettheloai/tl=:theLoai_id')
    .get(Controller.ChiTietTheLoai.readByTheLoai_id)
  app.route('/chitiettheloai/s=:sach_id')
    .get(Controller.ChiTietTheLoai.readBySach_id)
  app.route('/chitiettheloai/:theLoai_id/:sach_id')
    .delete(Controller.ChiTietTheLoai.del)

  //TheLoai Router
  app.route('/theloai/:tenTheLoai/:moTa')
    .post(Controller.TheLoai.create)
  app.route('/theloai')
    .get(Controller.TheLoai.read)
  app.route('/theloai/l=:limit/:offset')
    .get(Controller.TheLoai.readAllByLimit)
  app.route('/theloai/search=:query')
    .get(Controller.TheLoai.search)
  app.route('/theloai/:id/:tenTheLoai/:moTa')
    .put(Controller.TheLoai.update)
  app.route('/theloai/:id')
    .delete(Controller.TheLoai.del)
  app.route('/theloai/delall')
    .delete(Controller.TheLoai.delAll)




  //Sach Router
  app.route('/sach/:tenSach/:tacGia/:lanTaiBan/:preview/:preview_pic/:id_theLoai')
    .post(Controller.Sach.create)
  //Read
  app.route('/sach')
    .get(Controller.Sach.read)
  app.route('/sach/id=:id_theLoai/l=:limit/:offset')
    .get(Controller.Sach.readById_theLoai)

  app.route('/sach/id=:id_theLoai')
    .get(Controller.Sach.readById_theLoaiNoLimit)

  app.route('/sach/l=:limit/:offset')
    .get(Controller.Sach.readAllByLimit)
  app.route('/sach/search=:query')
    .get(Controller.Sach.readBySearch)
  app.route('/sach/:id/:tenSach/:moTa')
    .put(Controller.Sach.update)
  app.route('/sach/:id')
    .delete(Controller.Sach.del)
  app.route('/sach/:id')
    .get(Controller.Sach.readById)

  //Admin router
  app.route('/admin/:username/:pass/:avatar')
    .post(Controller.Admin.create)
  app.route('/admin/:username')
    .get(Controller.Admin.readByUsername)
  app.route('/admin/:username/:pass/:avatar')
    .put(Controller.Admin.update)
  app.route('/admin/log/:username/:pass')
    .get(Controller.Admin.logIn)


  //NhanVienRouter
  app.route('/nhanVien/:id/:tenNV/:ngaySinh/:sdt')
    .post(Controller.NhanVien.create)
  app.route('/nhanvien')
    .get(Controller.NhanVien.read)
  app.route('/nhanvien/l=:limit/:offset')
    .get(Controller.NhanVien.readAllByLimit)
  app.route('/nhanvien/:id')
    .delete(Controller.NhanVien.del)
  app.route('/nhanvien/:id')
    .get(Controller.NhanVien.readByNhanVien)

};