const x = parseInt(prompt("Hãy điền một số"));
const y = parseInt(prompt("Chưa đủ số, hãy thêm một số nữa"));
const z = parseInt(prompt("Sắp được rồi, còn một số nữa thôi"));
if (x > y && x > z) {
    document.write("Lần đầu tiên bạn nhập số, thì số đó là số lớn nhất");
} else if (y > z && y > x) {
    document.write("Bạn có nhập một số ở lần thứ hai, số đó lớn nhất");
} else if (z > y && z > x) {
    document.write("Bạn có nhập số cuối, số đó lớn nhất");

} else if (x === y && y === z) {
    document.write("Cả ba số bạn nhập bằng nhau");
} else if (x === y && y > z) {
    document.write("Có hai số đầu bạn nhập, hai số đó lớn nhất");
} else if (y === z && y > x) {
    document.write("Có hai số cuối bạn nhập, hai số đó lớn nhất");
} else if (x === z && x > y) {
    document.write("Khi bạn nhập ba số, số nằm ở giữa thấp nhất");
}