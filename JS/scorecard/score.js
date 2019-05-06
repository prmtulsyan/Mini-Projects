var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");

var ipt = document.querySelector("input");
var ws = document.querySelector("p span");

var gameover = false; 

var winningscore = 5;

p1s = 0;
p2s = 0;


p1Button.addEventListener("click", function(){
	if (!gameover) {
		p1s++;
		if(p1s===winningscore){
			gameover=true;
			p1score.classList.add("green");
		}
		p1score.innerHTML = p1s;	
	} 
});

p2Button.addEventListener("click", function(){
	if (!gameover) {
		p2s++;
		if(p2s===winningscore){
			gameover=true;
			p2score.classList.add("green");
		}
		p2score.innerHTML = p2s;	
	} 
});

reset.addEventListener("click", function(){
	rest();
});

ipt.addEventListener("change",function(){
	winningscore=Number(ipt.value);
	ws.innerHTML=Number(ipt.value);
	rest();
});

function rest(){
	p1s=0;
	p2s=0;
	p1score.innerHTML=0;
	p2score.innerHTML=0;
	gameover=false;
	winningscore=5;
	p1score.classList.remove("green");
	p2score.classList.remove("green");
};