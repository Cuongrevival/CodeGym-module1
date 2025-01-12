const n = parseInt(prompt("Nhập số nguyên"));
const moreThan0 = n > 0;
const lessThan0 = n < 0;
if (moreThan0) {
    document.write("Số này lớn hơn 0");
} else if (lessThan0) {
    document.write("Số này nhỏ hơn 0");
} else {
    document.write("Số này là số 0");
}