
var user = [];

function addUser(){


var userName = document.getElementById("userName").value;
var lista= document.getElementById("lista");
lista.innerHTML+= "<p>"+userName+"</p>"
user.push(userName);
document.getElementById("userName").value="";
console.log(user);  


}