const a = parseInt(prompt("Nhập số tuổi của bạn hoặc một người bạn biết:(Ở độ tuổi học sinh)"));
const duTuoi=a<15;
if (duTuoi) {
    document.write("Không đủ điều kiện vào học lớp 10");
} else {
    document.write("Ở độ tuổi này, bạn và người mà bạn đã nhập số tuổi vào sẽ phải làm một bài thi vào lớp 10 theo chương trình hiện tại.  ");

    document.write("Cố lên nhé!");
}