let diemKiemTra = parseInt(prompt("Nhập điểm bài kiểm tra của bạn"));
let diemGiuaKi = parseInt(prompt("Nhập điểm bài thi giữa kì của bạn"));
let diemCuoiKi = parseInt(prompt("Nhập điểm bài thi cuối kì của bạn"));
if (diemKiemTra >= 9 && diemGiuaKi >= 9 && diemCuoiKi >= 9) {
    document.write("Học lực giỏi");
} else {
    let diemTrungBinh = (diemKiemTra + diemGiuaKi * 2 + diemCuoiKi * 3) / 6;
    if (diemTrungBinh >= 9) {
        document.write("Học lực giỏi");

    } else if (diemTrungBinh >= 7.5 && diemTrungBinh < 9) {
        document.write("Học lực khá");
    } else if (diemTrungBinh >= 5 && diemTrungBinh < 7.5) {
        document.write("Học lực trung bình");
    } else {
        document.write("Học lực yếu");
    }
}