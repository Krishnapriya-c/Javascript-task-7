var s1 = document.getElementById('usr')
var s2 = document.getElementById('mail')
var s3 = document.getElementById('pwd')
function regfun()
 {
 	location.href ="a.html";

}
function storefun(){
	if(usr.value =='' || mail.value == ''|| pwd.value == '') 
		{

  	alert("please fill out all the fields")
  	return false;
  }
  else 
  {
	
 	localStorage.setItem("usr", usr.value);
 	
 	localStorage.setItem("mail", mail.value);
 	
 	localStorage.setItem("pwd", pwd.value);
 	alert("Registered successfully");
 }
}
function login()
{
	// stored data from registration form

var val1 = localStorage.getItem('usr');
var val2 = localStorage.getItem('mail');
var val3 = localStorage.getItem('pwd');

// Entering data to login
var p1 = document.getElementById('user').value;

var p2 = document.getElementById('maill').value;

var p3 = document.getElementById('pwdd').value;

 if(p1 =='' || p2 == ''|| p3 == '') 
  {

  	alert("please fill out all the fields")
  	return false;
  }
  	else if(user.value!== val1 || maill.value!= val2 || pwdd.value!=val3)  	
  	{
     alert("You should register before login")
  	}
  
     
 else
  {
  	alert("login success")
    console.log('login success');
    location.replace("b.html")

  }
  
 }

function msg(){
	var val1 = localStorage.getItem('usr');
var val2 = localStorage.getItem('mail');
var val3 = localStorage.getItem('pwd');


	document.getElementById("mess").innerHTML="Hello"+ " "+val1;

}
function main(){
	location.replace("index.html")
}