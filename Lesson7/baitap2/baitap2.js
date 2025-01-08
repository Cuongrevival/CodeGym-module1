function addition(){
    let x= document.getElementById("firstnumber").value;
    let y= document.getElementById("secondnumber").value;
    let z=x+y;
    document.getElementById("add").innerHTML="Result: " + z;

}
function substraction(){
    let x= document.getElementById("firstnumber").value;
    let y= document.getElementById("secondnumber").value;
    let z=x-y;
    document.getElementById("add").innerHTML="Result: " + z;

}
function multiply(){
    let x= document.getElementById("firstnumber").value;
    let y= document.getElementById("secondnumber").value;
    let z=x*y;
    document.getElementById("add").innerHTML="Result: " + z;

}
function division(){
    let x= document.getElementById("firstnumber").value;
    let y= document.getElementById("secondnumber").value;
    let z=x/y;
    document.getElementById("add").innerHTML="Result: " + z;

}