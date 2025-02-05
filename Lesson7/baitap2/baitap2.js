function addition(){
    let x= document.getElementById("firstNumber").value;
    let y= document.getElementById("secondNumber").value;
    let z= Number(x)+Number(y);
    document.getElementById("add").innerHTML="Result: " + z;

}
function substraction(){
    let x= document.getElementById("firstNumber").value;
    let y= document.getElementById("secondNumber").value;
    let z=x-y;
    document.getElementById("sub").innerHTML="Result: " + z;

}
function multiply(){
    let x= document.getElementById("firstNumber").value;
    let y= document.getElementById("secondNumber").value;
    let z=x*y;
    document.getElementById("mul").innerHTML="Result: " + z;

}
function division(){
    let x= document.getElementById("firstNumber").value;
    let y= document.getElementById("secondNumber").value;
    let z=x/y;
    document.getElementById("div").innerHTML="Result: " + z;

}