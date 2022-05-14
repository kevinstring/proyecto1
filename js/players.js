
var user = [];
var cont=1;
var userName = document.getElementById("userName");


function addUser(){
var lista= document.getElementById("lista");
var listaUser=document.getElementById("listaUsuarios");
if (userName.value!=""){
lista.innerHTML+= "<p>"+cont+"."+userName.value+"</p>"
user.push(userName.value);
document.getElementById("userName").value="";
console.log(user);  
cont++;
if(cont>2){
document.getElementById("iniciar").style.display="block";
}

}


}

export function getUser userName[](){
userName = this.user[];
return username;
}


