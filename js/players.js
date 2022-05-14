
var user = [];
var cont=1;
function addUser(){


var userName = document.getElementById("userName").value;
var lista= document.getElementById("lista");
if (userName!=""){
lista.innerHTML+= "<p>"+cont+"."+userName+"</p>"
user.push(userName);
document.getElementById("userName").value="";
console.log(user);  
cont++;
}
}