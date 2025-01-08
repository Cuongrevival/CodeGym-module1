let year = parseInt(prompt("Please enter the year"));
let isLeapYear = false;
let divisibleBy4 = year % 4 === 0;
if (divisibleBy4) {
    let divisibleBy100 = year % 100 === 0;
    if (divisibleBy100) {
        let divisibleBy400 = year % 400 === 0;
        if (divisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}
if (isLeapYear) {
    alert("This is a leap year");

} else {
    alert("This is not a leap year");
}