let cuocCoDinh = parseInt(prompt("Nhập số tiền cước cố định của hộ gia đình"));
let thoiGianGoi = parseInt(prompt("Nhập thời gian gọi trung bình của điện thoại nhà bạn(phút)"));
let donGiaNoiMang = parseInt(prompt("Nhập đơn giá nội mạng bạn mua cho điện thoại"));
let donGiaNgoaiMang = parseInt(prompt("Nhập đơn giá ngoại mạng bạn mua cho điện thoại"));
const cuocNoiMang = thoiGianGoi * donGiaNoiMang;
const cuocNgoaiMang = donGiaNgoaiMang * donGiaNgoaiMang;
let dichVuKhac = parseInt(prompt("Nhập phí các dịch vụ khác bạn sử dụng"));
let cuocGiaDinh = cuocNoiMang + cuocNgoaiMang + cuocCoDinh + dichVuKhac;
document.write('Cước bạn phải trả hàng tháng là:' + cuocGiaDinh);