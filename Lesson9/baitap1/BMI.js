function myBMI() {
    let weight=document.getElementById("myWeight").value;
    let height=document.getElementById("myHeight").value;
    let BMI=weight/(height*height);
    if (BMI < 18.5) {
        document.getElementById("myBMI").innerHTML= "UnderWeight";
    } else if (BMI < 25.0) {
        document.getElementById("myBMI").innerHTML= "Normal";
    } else if (BMI < 30.0) {
        document.getElementById("myBMI").innerHTML= "Overweight";
    } else {
        document.getElementById("myBMI").innerHTML= "Obese";

    }
}
