function myBMI() {
    let weight=document.getElementById("myWeight").value;
    let height=document.getElementById("myHeight").value;
    let BMI=weight/(height*height);
    if (BMI < 18.5) {
        document.write("UnderWeight");
    } else if (BMI < 25.0) {
        document.write("Normal");
    } else if (BMI < 30.0) {
        document.write("Overweight");
    } else {
        document.write("Obese");
        console.log(BMI);
    }
}