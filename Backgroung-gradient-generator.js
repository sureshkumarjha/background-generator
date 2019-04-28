var color1=document.querySelector("body input.color1");
var color2=document.querySelector("body input.color2");
var gradient=document.querySelector("body");
var text=document.querySelector("h3");

function setgradient(event){
	gradient.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	text.innerHTML="linear-gradient(to right,"+color1.value+","+color2.value+");"; 

}

color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);

