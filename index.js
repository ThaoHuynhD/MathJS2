function xetTuyenSinh() {
    var diemChuan = document.getElementById("diem-chuan").value * 1;
    var diemMon1 = document.getElementById("diem-mon-1").value * 1;
    var diemMon2 = document.getElementById("diem-mon-2").value * 1;
    var diemMon3 = document.getElementById("diem-mon-3").value * 1;
    var diemUuTienKhuVuc = document.getElementById("khu-vuc").value * 1;
    var diemUuTienDoiTuong = document.getElementById("doi-tuong-du-thi").value * 1;

    console.log("diemChuan: ", diemChuan);
    console.log("diemMon1: ", diemMon1);
    console.log("diemMon2: ", diemMon2);
    console.log("diemMon3: ", diemMon3);
    console.log("diemUuTienKhuVuc: ", diemUuTienKhuVuc);
    console.log("diemUuTienDoiTuong: ", diemUuTienDoiTuong);
    if (diemChuan < 0 || diemChuan > 30) {
        alert("Bạn đã nhập sai dữ liệu điểm chuẩn, vui lòng nhập lại!");
    }
    else {
        if (diemMon1 < 0 || diemMon1 > 10 || diemMon2 < 0 || diemMon2 > 10 || diemMon3 < 0 || diemMon3 > 10) {
            alert("Bạn đã nhập sai dữ liệu điểm các môn, vui lòng nhập lại!")
        }
        else {
            if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
                document.getElementById("ket-qua-xet-tuyen").innerHTML = `Bạn đã rớt do có môn 0 điểm`;
            }
            else {
                var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;
                console.log("tongDiem: ", tongDiem);
                document.getElementById("ket-qua-xet-tuyen").innerHTML = `Bạn đã đậu với tổng điểm là ${tongDiem} điểm`;
            }
        }
    }
}
function tinhTienDien() {
    var tenKhachHang = document.getElementById("ten-khach-hang").value;
    console.log("tenKhachHang: ", tenKhachHang);
    var soKWH = document.getElementById("so-KWH").value * 1;
    console.log("soKWH: ", soKWH);
    var TongTienDien = 0;
    if (soKWH <= 0) {
        TongTienDien = 0;
    }
    else if (soKWH <= 50) {
        TongTienDien = 500 * soKWH;
    }
    else if (soKWH <= 100) {
        TongTienDien = 500*50 + 650*(soKWH - 50);
    }
    else if (soKWH <= 200) {
        TongTienDien = 500*50 + 650*50 + 850*(soKWH - 100);
    }
    else if (soKWH <= 350) {
        TongTienDien = 500*50 + 650*50 + 850*100 + 1100*(soKWH - 200);
    }
    else {
        TongTienDien = 500*50 + 650*50 + 850*100 + 1100*150 + 1300 * (soKWH - 350);
    }
    document.getElementById("tong-tien-dien").innerHTML = `Số tiền điện khách hàng ${tenKhachHang} cần thanh toán là ${TongTienDien.toLocaleString()} vnđ`;
}

function tinhTienThueTNCN() {
    var hoVaTen = document.getElementById("ho-va-ten").value;
    var tongThuNhap = document.getElementById("tong-thu-nhap-nam").value * 1 / 1000000;
    var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1;

    console.log("hoVaTen: ", hoVaTen);
    console.log("tongThuNhap: ", tongThuNhap);
    console.log("soNguoiPhuThuoc: ", soNguoiPhuThuoc);

    if (tongThuNhap < 0 || soNguoiPhuThuoc < 0) {
        alert("Bạn đã nhập sai dữ liệu, vui lòng nhập lại!");
    }
    else {
        var tongThueTNCN = null;
        var thuNhapChiuThue = (tongThuNhap - 4 - soNguoiPhuThuoc * 1.6);

        console.log("tongThueTNCN: ", tongThueTNCN);
        console.log("thuNhapChiuThue: ", thuNhapChiuThue);

        if (thuNhapChiuThue <= 0) {
            tongThueTNCN = 0;
        }
        else if (thuNhapChiuThue <= 60) {
            tongThueTNCN = thuNhapChiuThue * 0.05;
        }
        else if (thuNhapChiuThue <= 120) {
            tongThueTNCN = 60*0.05 + (thuNhapChiuThue-60)*0.1;
        }
        else if (thuNhapChiuThue <= 210) {
            tongThueTNCN = 60*0.05 + 60*0.1 + (thuNhapChiuThue-120)*0.15;
        }
        else if (thuNhapChiuThue <= 384) {
            tongThueTNCN = 60*0.05 + 60*0.1 + 90*0.15 + (thuNhapChiuThue-210)*0.2;
        }
        else if (thuNhapChiuThue <= 624) {
            tongThueTNCN = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + (thuNhapChiuThue-384)*0.25;
        }
        else if (thuNhapChiuThue <= 960) {
            tongThueTNCN = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + (thuNhapChiuThue-624)*0.3;
        }
        else {
            tongThueTNCN = 60*0.05 + 60*0.1 + 90*0.15 + 174*0.2 + 240*0.25 + 336*0.3 + (thuNhapChiuThue-960)*0.35;
        }
        tongThueTNCN = tongThueTNCN * 1000000;
        document.getElementById("tong-tien-thue-TNCN").innerHTML = `Số tiền thuế TNCN ${hoVaTen} cần phải trả là ${tongThueTNCN.toLocaleString()} vnđ`;
    }
}
function anSoKetNoi() {
    var loaiKhachHang = document.getElementById("loai-khach-hang").value;
    if (loaiKhachHang == "nha-dan") {
        // var anSoKetNoi = document.getElementById("KetNoi");
        // anSoKetNoi.parentNode.removeChild(anSoKetNoi);
document.getElementById("nha-dan").style.di
    }

}
function tinhTienCap() {
    var maKhachHang = document.getElementById("ma-khach-hang").value;
    var loaiKhachHang = document.getElementById("loai-khach-hang").value;

    var soKetNoi = null;
    if (loaiKhachHang == "nha-dan") {
        soKetNoi = 0;
    }
    else {
        soKetNoi = document.getElementById("so-ket-noi").value * 1;
    }

    var soKenhCaoCap = document.getElementById("so-kenh-cao-cap").value * 1;
    var tongTienCap = null;
    var phiXuLyHoaDon = null;
    var phiDichvuCoBan = null;
    var phiDichvuCoBanCongThem = null;
    var phiThueKenhCaoCap = null;

    console.log("maKhachHang: ", maKhachHang);
    console.log("loaiKhachHang: ", loaiKhachHang);
    console.log("soKetNoi: ", soKetNoi);
    console.log("soKenhCaoCap: ", soKenhCaoCap);

    if (maKhachHang == "" || soKetNoi < 0 || soKenhCaoCap < 0) {
        alert("Bạn đã nhập sai dữ liệu. vui lòng nhập lại!")
    }
    else {
        switch (loaiKhachHang) {
            case "nha-dan": {
                phiXuLyHoaDon = 4.5;
                phiDichvuCoBan = 20.5;
                phiThueKenhCaoCap = 7.5;
                tongTienCap = phiXuLyHoaDon + phiDichvuCoBan +  phiThueKenhCaoCap * soKenhCaoCap;
            }
            break;
            case "doanh-nghiep": {
                phiXuLyHoaDon = 15;
                if (soKetNoi <= 10) {
                    phiDichvuCoBan = 75;
                }
                else {
                    phiDichvuCoBanCongThem = 5;
                    phiDichvuCoBan = (75 + soKetNoi - 10) * phiDichvuCoBanCongThem;
                }
                phiThueKenhCaoCap = 50;
                tongTienCap = phiXuLyHoaDon + phiDichvuCoBan + phiThueKenhCaoCap * soKenhCaoCap;
            }
            break;
            default: {
                alert("Đã có lỗi xảy ra!");
            }
        }
    }
    console.log("tongTienCap: ", tongTienCap);
    document.getElementById("tong-tien-cap").innerHTML = `Tổng tiền cáp mà quý khách ${maKhachHang} phải thanh toán là: ${tongTienCap.toLocaleString()} $.`
}