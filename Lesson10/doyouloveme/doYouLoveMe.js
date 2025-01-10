function myFunction(){
alert("Thank you so much!");
}
function moveaway(){
  let a= Math.random()*(window.innerWidth-100);
  let b=Math.random()*(window.innerHeight-50);
document.getElementById("btnNo").style.left= a+'px';
document.getElementById("btnNo").style.top= b+'px';
}