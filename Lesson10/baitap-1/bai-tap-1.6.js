const  thuNhapDoanhSo = parseInt(prompt("Nhập số tiền bạn hoặc nhóm bạn nhận được thoe doan số bán hàng"));
const tyLehHoaHong = parseInt(prompt("Nhập quy định mức hoa hồng mà đã quy định từ trước(%)"));
const tienHoaHong = thuNhapDoanhSo * (tyLehHoaHong / 100);
document.write('Tiền hoa hồng của bạn:' + tienHoaHong);