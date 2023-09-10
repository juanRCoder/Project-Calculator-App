
function del(){
	var value=document.getElementById('screen').value;
	document.getElementById('screen').value=value.substr(0,value.length-1);
}

var two=document.getElementById('two');
two.addEventListener('click',function(){
	var body=document.querySelector('body');
	var toggle=document.getElementById('circle');
	body.classList.add('active1');
	body.classList.remove('active2');
	toggle.style.left='36%';
})

var one=document.getElementById('one');
one.addEventListener('click',function(){
	var body=document.querySelector('body');
	var toggle=document.getElementById('circle');
	body.classList.remove('active1');
	body.classList.remove('active2');
	toggle.style.left='0';
})

var three=document.getElementById('three');
three.addEventListener('click',function(){
	var body=document.querySelector('body');
	var toggle=document.getElementById('circle');
	body.classList.add('active2');
	body.classList.remove('active1');
	toggle.style.left='65%';
})

var sonido = new Audio();
var sonido3 = new Audio();
var sonido4 = new Audio();

sonido.src = "effects_sounds/click_effect.mp3";
function playSound() {
    sonido.play();
}
sonido3.src = "effects_sounds/chorro_effect.mp3";
function playSound3() {
    sonido3.play();
}
sonido4.src = "effects_sounds/bubble_effect.mp3";
function playSound4() {
    sonido4.play();
}