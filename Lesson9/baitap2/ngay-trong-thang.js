function ngayTrongThang() {
    let a = document.getElementById("thang").value;
    switch (a) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            document.getElementById("ngayTrongThang").innerHTML = "Tháng này có 31 ngày";
            break;
        case "2":
            document.getElementById("ngayTrongThang").innerHTML = "Tháng này có 28 ngày(nếu là năm thường) hoặc 29 ngày(nếu là năm nhuận)";
            break;
        case '4':
        case "6":
        case "9":
        case "11":
            document.getElementById("ngayTrongThang").innerHTML = "Tháng này có 30 ngày";
            break;
        default:
            document.getElementById("ngayTrongThang").innerHTML = "Không có tháng này";
    }
}