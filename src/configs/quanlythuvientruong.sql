-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2023 at 03:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlythuvientruong`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `avatar` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `pass`, `avatar`) VALUES
('lynla', '1234', 'depssss');

-- --------------------------------------------------------

--
-- Table structure for table `bangMuonSach`
--

CREATE TABLE `bangMuonSach` (
  `id` int(11) NOT NULL,
  `nhanVien_id` int(11) NOT NULL,
  `the_id` int(11) NOT NULL,
  `sdt` varchar(100) NOT NULL,
  `ngayMuon` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hanTra` varchar(100) DEFAULT NULL,
  `sach_id` int(11) NOT NULL,
  `soLuong` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chiTietTheLoai`
--

CREATE TABLE `chiTietTheLoai` (
  `theLoai_id` int(11) NOT NULL,
  `sach_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chiTietTheLoai`
--

INSERT INTO `chiTietTheLoai` (`theLoai_id`, `sach_id`) VALUES
(84, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cungCapSach`
--

CREATE TABLE `cungCapSach` (
  `id` int(11) NOT NULL,
  `YC_id` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tongTien` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cungCapSachChiTiet`
--

CREATE TABLE `cungCapSachChiTiet` (
  `cungCap_id` int(11) NOT NULL,
  `sach_id` int(11) NOT NULL,
  `soLuong` int(11) NOT NULL,
  `DonGia` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `docGia`
--

CREATE TABLE `docGia` (
  `theThuVien_id` varchar(100) NOT NULL,
  `hoTen` varchar(100) NOT NULL,
  `NgaySinh` date NOT NULL,
  `sdt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kho`
--

CREATE TABLE `kho` (
  `id_book` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `muonSachchiTiet`
--

CREATE TABLE `muonSachchiTiet` (
  `muonSach_id` int(11) NOT NULL,
  `sach_id` int(11) NOT NULL,
  `soLuong` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nhanVien`
--

CREATE TABLE `nhanVien` (
  `id` varchar(100) NOT NULL,
  `tenNV` varchar(100) NOT NULL,
  `ngaysinh` varchar(100) NOT NULL,
  `sdt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nhanVien`
--

INSERT INTO `nhanVien` (`id`, `tenNV`, `ngaysinh`, `sdt`) VALUES
('bachHP2002', 'Bạch Hồng Phú', '2002-06-07', '0396590526'),
('toanDtr', 'Vũ Văn Toàn', '2002-07-08', '0789123122');

-- --------------------------------------------------------

--
-- Table structure for table `NXB`
--

CREATE TABLE `NXB` (
  `id` int(11) NOT NULL,
  `tenNxb` int(11) NOT NULL,
  `diaChi` int(11) NOT NULL,
  `sdt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sach`
--

CREATE TABLE `sach` (
  `id` int(11) NOT NULL,
  `tenSach` varchar(200) NOT NULL,
  `tacGia` varchar(200) NOT NULL,
  `lanTaiBan` varchar(11) NOT NULL DEFAULT '1',
  `id_theLoai` int(11) NOT NULL,
  `preview` text NOT NULL,
  `preview_pic` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sach`
--

INSERT INTO `sach` (`id`, `tenSach`, `tacGia`, `lanTaiBan`, `id_theLoai`, `preview`, `preview_pic`) VALUES
(15, 'Đây là một cuốn sách khá nghiêm túc', 'null', '2', 95, 'Đây là một cuốn sách khá nghiêm túc Đây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túcĐây là một cuốn sách khá nghiêm túc', 'lynla _1685855361804_.jpg'),
(21, 'Dummy data', 'null', '2', 85, 'null', 'lynla _1685931151208_.jpg'),
(23, 'Thêm sách để test tìm kiếm thui', 'hhaaa', 'null', 90, 'ko có', 'lynla _1685931208692_.jpg'),
(26, 'Haha', 'o có', '2', 91, 'ko có', 'lynla _1685931227773_.jpg'),
(27, 'Hi vọng ko bị lỗi', 'chắc là ok', '2', 89, 'ok', 'lynla _1685931610812_.jpg'),
(29, 's', 's', '1', 88, 's', 'lynla _1685931631483_.jpg'),
(30, '1', '1', '1', 85, '1', 'lynla _1685932264196_.jpg'),
(31, '2', '2', '2', 95, '2', 'lynla _1685932264196_.jpg'),
(32, '2', '2', '2', 95, '2', 'lynla _1685932276986_.jpg'),
(33, 'null', 'null', '1', 85, 'null', 'lynla _1685932264196_.jpg'),
(45, 'Haha', '123', '1', 92, '123', 'lynla _1685932652696_.jpg'),
(46, 'test', 'ko cos', '1', 98, 'null', 'lynla _1685933555793_.jpg'),
(47, 'Busss', 'a', '2', 85, 'a2', 'lynla _1685933604316_.jpg'),
(48, 'Asd', 'as', '2', 112, 'q', 'lynla _1685933631068_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `theLoai`
--

CREATE TABLE `theLoai` (
  `id` int(11) NOT NULL,
  `tenTheLoai` varchar(200) NOT NULL,
  `moTa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theLoai`
--

INSERT INTO `theLoai` (`id`, `tenTheLoai`, `moTa`) VALUES
(85, 'Ẩm thực - Nấu ăn', 'null'),
(86, 'Học Ngoại Ngữ', 'null'),
(87, 'Khác', 'null'),
(88, 'Kiến Trúc - Xây Dựng', 'null'),
(89, 'Marketing - Bán hàng', 'null'),
(90, 'Tài Liệu Học Tập', 'null'),
(91, 'Tiểu Thuyết Phương Tây', 'null'),
(92, 'Trinh Thám - Hình Sự', 'null'),
(93, 'Truyên Teen - Tuổi Học Trò', 'null'),
(94, 'Văn Học Việt Nam', 'null'),
(95, 'Cổ Tích - Thần Thoại', 'null'),
(96, 'Hồi Ký - Tuỳ Bút', 'null'),
(97, 'Khoa Học - Kỹ Thuật', 'null'),
(98, 'Kinh Tế - Quản Lý', 'null'),
(99, 'Nông - Lâm - Ngư', 'null'),
(100, 'Tâm Lý - Kỹ Năng Sống', 'null'),
(101, 'Tiểu Thuyết Trung Quốc', 'null'),
(102, 'Truyện Cười - Tiếu Lâm', 'null'),
(103, 'Truyện Tranh', 'null'),
(104, 'Y Học - Sức Khỏe', 'null'),
(105, 'Công Nghệ Thông Tin', 'null'),
(106, 'Huyền bí - Giả Tưởng', 'null'),
(107, 'Kiếm Hiệp - Tiên Hiệp', 'null'),
(108, 'Lịch Sử - Chính Trị', 'null'),
(109, 'Phiêu Lưu - Mạo Hiểm', 'null'),
(110, 'Thể Thao - Nghệ Thuật', 'null'),
(111, 'Triết Học', 'null'),
(112, 'Truyện Ngắn - Ngôn Tình', 'null'),
(113, 'Văn Hóa', 'null');

-- --------------------------------------------------------

--
-- Stand-in structure for view `theLoaiSach`
-- (See below for the actual view)
--
CREATE TABLE `theLoaiSach` (
`id` int(11)
,`tenSach` varchar(200)
,`tacGia` varchar(200)
,`lanTaiBan` varchar(11)
,`id_theLoai` int(11)
,`preview` text
,`preview_pic` varchar(200)
,`tenTheLoai` varchar(200)
);

-- --------------------------------------------------------

--
-- Table structure for table `theThuVien`
--

CREATE TABLE `theThuVien` (
  `id` varchar(100) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `hanDung` date NOT NULL,
  `nhanVien_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thongBao`
--

CREATE TABLE `thongBao` (
  `theThuVien_id` int(11) NOT NULL,
  `nhanVien_id` int(11) NOT NULL,
  `noiDung` varchar(200) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_muonsach`
-- (See below for the actual view)
--
CREATE TABLE `view_muonsach` (
`id` int(11)
,`tenSach` varchar(200)
,`tenNV` varchar(100)
,`ngayMuon` timestamp
,`hanTra` varchar(100)
,`sdt` varchar(100)
);

-- --------------------------------------------------------

--
-- Table structure for table `yeuCauNhapChiTiet`
--

CREATE TABLE `yeuCauNhapChiTiet` (
  `YC_id` int(11) NOT NULL,
  `soLuong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `yeucauNhapSach`
--

CREATE TABLE `yeucauNhapSach` (
  `id` int(11) NOT NULL,
  `nhanVien_id` int(11) NOT NULL,
  `Nxb_id` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure for view `theLoaiSach`
--
DROP TABLE IF EXISTS `theLoaiSach`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `theLoaiSach`  AS SELECT `sach`.`id` AS `id`, `sach`.`tenSach` AS `tenSach`, `sach`.`tacGia` AS `tacGia`, `sach`.`lanTaiBan` AS `lanTaiBan`, `sach`.`id_theLoai` AS `id_theLoai`, `sach`.`preview` AS `preview`, `sach`.`preview_pic` AS `preview_pic`, `theLoai`.`tenTheLoai` AS `tenTheLoai` FROM (`sach` join `theLoai` on(`sach`.`id_theLoai` = `theLoai`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `view_muonsach`
--
DROP TABLE IF EXISTS `view_muonsach`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_muonsach`  AS SELECT `bangMuonSach`.`id` AS `id`, `sach`.`tenSach` AS `tenSach`, `nhanVien`.`tenNV` AS `tenNV`, `bangMuonSach`.`ngayMuon` AS `ngayMuon`, `bangMuonSach`.`hanTra` AS `hanTra`, `bangMuonSach`.`sdt` AS `sdt` FROM (((`bangMuonSach` join `muonSachchiTiet` on(`bangMuonSach`.`id` = `muonSachchiTiet`.`muonSach_id`)) join `sach` on(`muonSachchiTiet`.`sach_id` = `sach`.`id`)) join `nhanVien` on(`bangMuonSach`.`nhanVien_id` = `nhanVien`.`id`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bangMuonSach`
--
ALTER TABLE `bangMuonSach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cungCapSach`
--
ALTER TABLE `cungCapSach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nhanVien`
--
ALTER TABLE `nhanVien`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `NXB`
--
ALTER TABLE `NXB`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sach`
--
ALTER TABLE `sach`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theLoai`
--
ALTER TABLE `theLoai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theThuVien`
--
ALTER TABLE `theThuVien`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `yeucauNhapSach`
--
ALTER TABLE `yeucauNhapSach`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bangMuonSach`
--
ALTER TABLE `bangMuonSach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cungCapSach`
--
ALTER TABLE `cungCapSach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `NXB`
--
ALTER TABLE `NXB`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sach`
--
ALTER TABLE `sach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `theLoai`
--
ALTER TABLE `theLoai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `yeucauNhapSach`
--
ALTER TABLE `yeucauNhapSach`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
