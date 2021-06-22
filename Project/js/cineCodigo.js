//number of questions answered
var iteration=0;
//total number of questions
var total=10;
//stores how many right answers the player has gotten
var rightAnswers=0;

//stores repeated answers
var repeated=[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
var r=0;

//function to play the quiz
function play(){
console.clear();
console.log("Iteration: "+iteration);
console.log("Righ: "+rightAnswers);

document.getElementById("button1").className = "button";
document.getElementById("button2").className = "button";
document.getElementById("button3").className = "button";
document.getElementById("button4").className = "button";
document.getElementById("button5").className = "ghost";

var cine = [
	{ID:1, nombre:"Amores Perros", image:"images/cine/amoresPerros.webp"},
	{ID:2, nombre:"El automovil gris", image:"images/cine/automovilGris.jpg"},
	{ID:3, nombre:"Chicuarotes", image:"images/cine/Chicuarotes.jpg"},
	{ID:4, nombre:"El compadre mendoza", image:"images/cine/compadreMendoza.jpg"},
	{ID:5, nombre:"No se aceptan devoluciones", image:"images/cine/devoluciones.webp"},
	{ID:6, nombre:"Enamorada", image:"images/cine/enamorada.jpg"},
	{ID:7, nombre:"Heli", image:"images/cine/heli.webp"},
	{ID:8, nombre:"La otra", image:"images/cine/laOtra.jpg"},
	{ID:9, nombre:"La ley de herodes", image:"images/cine/leyHerodes.jpg"},
	{ID:10, nombre:"Macario", image:"images/cine/macario.jpg"},
	{ID:11, nombre:"Ya no estoy aqui", image:"images/cine/noEstoy.jpg"},
	{ID:12, nombre:"Nosotros los pobres", image:"images/cine/nosotrosPobres.jpg"},
	{ID:13, nombre:"El crimen del padre Amaro", image:"images/cine/padreAmaro.jpg"},
	{ID:14, nombre:"Vámonos con Pancho Villa", image:"images/cine/panchoVilla.jpg"},
	{ID:15, nombre:"Roma", image:"images/cine/roma.jpg"},
	{ID:16, nombre:"Vampiro", image:"images/cine/vampiro.jpg"},

];

//question counter
iteration++;
let cont = document.getElementById('cont');
cont.innerHTML = iteration+"/"+total;

//ends game after n turns
if (iteration==(total+1)) {
	document.getElementById("button1").className = "button disabled";
	document.getElementById("button2").className = "button disabled";
	document.getElementById("button3").className = "button disabled";
	document.getElementById("button4").className = "button disabled";
	document.getElementById("button6").className = "buttonB";
	if (rightAnswers>(total*.667)) {
		document.getElementById("cont").innerHTML = "Outstanding! "+rightAnswers+"/"+(total)+" Right answers";	
		document.getElementById("cont").className = "text text1";
	}else if (rightAnswers>(total*.334)){
		document.getElementById("cont").innerHTML = "OK! "+rightAnswers+"/"+(total)+" Right answers";	
		document.getElementById("cont").className = "text text2";
	}else{
		document.getElementById("cont").innerHTML = "Better luck next time "+rightAnswers+"/"+(total)+" Right answers";	
		document.getElementById("cont").className = "text text3";
	}
	return null;
}

//random number generator
const generateRandomNumber = (min, max) =>  {
	return Math.floor(Math.random() * ((max+1) - min) + min);
}

var respCorrecta;
var respIncorrecta1;
var respIncorrecta2;
var respIncorrecta3;

//chooses right answer out of all the options
respCorrecta = generateRandomNumber(0, (16-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (16-1));
		j=0;
	}
	j++;
}
repeated[r]=respCorrecta;
console.log("arr: "+ repeated);
r++;

//chooses wrong answers
respIncorrecta1=respCorrecta;
respIncorrecta2=respCorrecta;
respIncorrecta3=respCorrecta;
//makes sure there are no repeated options, diferent states could belong to the same nombre
while(respIncorrecta1==respCorrecta || cine[respIncorrecta1].nombre==cine[respCorrecta].nombre){
	respIncorrecta1 = generateRandomNumber(0, (16-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || cine[respIncorrecta2].nombre==cine[respCorrecta].nombre || cine[respIncorrecta2].nombre==cine[respIncorrecta1].nombre){
	respIncorrecta2 = generateRandomNumber(0, (16-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| cine[respIncorrecta3].nombre==cine[respCorrecta].nombre || cine[respIncorrecta3].nombre==cine[respIncorrecta1].nombre || cine[respIncorrecta3].nombre==cine[respIncorrecta2].nombre){
	respIncorrecta3 = generateRandomNumber(0, (16-1));
}

console.log(cine[respCorrecta]);
console.log(cine[respIncorrecta1]);
console.log(cine[respIncorrecta2]);
console.log(cine[respIncorrecta3]);

//changes right image
document.getElementById("img").src=cine[respCorrecta].image;

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

//chooses question to ask ouf of 3 questions (1:name, 2:nombre, 3:nombre)
var questionRand = generateRandomNumber(1, 3);

//chooses the button out of the 4 buttons that will display the right answer
var rightButton = generateRandomNumber(1, 4);
console.log("Right answer: Button "+rightButton);
let question = document.getElementById('question');
if (questionRand==1) {
	question.innerHTML = "What is the name of this movie?";
	if(rightButton==1){
		btn1.innerHTML = cine[respCorrecta].nombre;
		btn2.innerHTML = cine[respIncorrecta1].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respCorrecta].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respCorrecta].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respIncorrecta3].nombre;
		btn4.innerHTML = cine[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the nombre of this movie?";
	if(rightButton==1){
		btn1.innerHTML = cine[respCorrecta].nombre;
		btn2.innerHTML = cine[respIncorrecta1].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respCorrecta].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respCorrecta].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respIncorrecta3].nombre;
		btn4.innerHTML = cine[respCorrecta].nombre;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the nombre of this movie?";
	if(rightButton==1){
		btn1.innerHTML = cine[respCorrecta].nombre;
		btn2.innerHTML = cine[respIncorrecta1].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respCorrecta].nombre;
		btn3.innerHTML = cine[respIncorrecta2].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respCorrecta].nombre;
		btn4.innerHTML = cine[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = cine[respIncorrecta1].nombre;
		btn2.innerHTML = cine[respIncorrecta2].nombre;
		btn3.innerHTML = cine[respIncorrecta3].nombre;
		btn4.innerHTML = cine[respCorrecta].nombre;
	}
}

//audio
var soundRight = document.getElementById("audioRight");
var soundWrong = document.getElementById("audioWrong");

//makes sure buttons are actioned only once
var band=0;

btn1.addEventListener('click', function(){
	document.getElementById("button1").className = "button disabled";
	document.getElementById("button2").className = "button disabled";
	document.getElementById("button3").className = "button disabled";
	document.getElementById("button4").className = "button disabled";
	if (rightButton==1 && band==0) {
		rightAnswers++;
		soundRight.pause();
		soundRight.currentTime = 0;
		soundRight.play();
		console.log("Correcto1");
		document.getElementById("button5").className = "buttonR"; 
	}else if(rightButton!=1 && band==0) {
		soundWrong.pause();
		soundWrong.currentTime = 0;
		soundWrong.play();
		console.log("Incorrecto1");
		document.getElementById("button5").className = "buttonW"; 
	}
	band++;
});

btn2.addEventListener('click', function(){
	document.getElementById("button1").className = "button disabled";
	document.getElementById("button2").className = "button disabled";
	document.getElementById("button3").className = "button disabled";
	document.getElementById("button4").className = "button disabled";
	if (rightButton==2 && band==0) {
		rightAnswers++;
		soundRight.pause();
		soundRight.currentTime = 0;
		soundRight.play();
		console.log("Correcto2");
		document.getElementById("button5").className = "buttonR"; 
	}else if(rightButton!=2 && band==0) {
		soundWrong.pause();
		soundWrong.currentTime = 0;
		soundWrong.play();
		console.log("Incorrecto2");
		document.getElementById("button5").className = "buttonW"; 
	}
	band++;
});

btn3.addEventListener('click', function(){
	document.getElementById("button1").className = "button disabled";
	document.getElementById("button2").className = "button disabled";
	document.getElementById("button3").className = "button disabled";
	document.getElementById("button4").className = "button disabled";
	if (rightButton==3 && band==0) {
		rightAnswers++;
		soundRight.pause();
		soundRight.currentTime = 0;
		soundRight.play();
		console.log("Correcto3");
		document.getElementById("button5").className = "buttonR"; 
	}else if(rightButton!=3 && band==0) {
		soundWrong.pause();
		soundWrong.currentTime = 0;
		soundWrong.play();
		console.log("Incorrecto3");
		document.getElementById("button5").className = "buttonW"; 
	}
	band++;
});

btn4.addEventListener('click', function(){
	document.getElementById("button1").className = "button disabled";
	document.getElementById("button2").className = "button disabled";
	document.getElementById("button3").className = "button disabled";
	document.getElementById("button4").className = "button disabled";
	if (rightButton==4 && band==0) {
		rightAnswers++;
		soundRight.pause();
		soundRight.currentTime = 0;
		soundRight.play();
		console.log("Correcto4");
		document.getElementById("button5").className = "buttonR"; 
	}else if(rightButton!=4 && band==0) {
		soundWrong.pause();
		soundWrong.currentTime = 0;
		soundWrong.play();
		console.log("Incorrecto4");
		document.getElementById("button5").className = "buttonW"; 
	}
	band++;
});

}

play();
