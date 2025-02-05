function chuyentien(){
let amount=document.getElementById("amount").value;
let change1=document.getElementById("currency1").value;
let change2=document.getElementById("currency2").value;
let result;
if(change1 === "VND" && change2 === "USD"){
    result =  (amount/25385);
}
else if(change1==="USD"&&change2==="VND"){
    result =  (amount*25385);
}
else if(change1===change2==="USD" || change1===change2==="USD"){
    result =  amount;
}
else{
    result =  amount;
}
document.getElementById("result").innerHTML="Tiền sau khi chuyển: "+ result;
}