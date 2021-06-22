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

var comida = [
	{ID:1, nombre:"Cemita", image:"images/comida/cemitas.jpg"},
	{ID:2, nombre:"Chicharron Verde", image:"images/comida/chicharronVerde.jpg"},
	{ID:3, nombre:"Chiles en nogada", image:"images/comida/chilesEnnogada.jpg"},
	{ID:4, nombre:"Enchiladas", image:"images/comida/enchiladas.jpg"},
	{ID:5, nombre:"Flautas", image:"images/comida/flautas.jpg"},
	{ID:6, nombre:"Huaraches", image:"images/comida/Huaraches.jpg"},
	{ID:7, nombre:"Memelas", image:"images/comida/memelas.jpg"},
	{ID:8, nombre:"Mole", image:"images/comida/mole.jpg"},
	{ID:9, nombre:"Pipian Verde", image:"images/comida/pipianVerde.jpg"},
	{ID:10, nombre:"Pozole", image:"images/comida/pozole.jpg"},
	{ID:11, nombre:"Tacos de Canasta", image:"images/comida/tacosDeCanasta.jpg"},
	{ID:12, nombre:"Tacos de Carnitas", image:"images/comida/tacosDecarnitas.jpg"},
	{ID:13, nombre:"Tamales", image:"images/comida/tamales.jpg"},
	{ID:14, nombre:"Tinga", image:"images/comida/tinga.jpg"},
	{ID:15, nombre:"Tortas Ahogadas", image:"images/comida/tortasAhogadas.jpg"},
	{ID:16, nombre:"Quesadillas", image:"images/comida/quesadillas.jpg"},
	{ID:17, nombre:"Aguachile", image:"images/comida/aguachile.jpg"},
	{ID:18, nombre:"Ensalada Cesar", image:"images/comida/ensaladaCesar.jpg"},
	{ID:19, nombre:"Pescado a la Veracruzana", image:"images/comida/PescadoAlaVeracruzana.jpg"},
	{ID:20, nombre:"Vuelve a la Vida", image:"images/comida/VuelvealaVida.jpg"},
	{ID:21, nombre:"Zacahuil", image:"images/comida/zacahuil.jpg"},
	{ID:22, nombre:"Ceviche", image:"images/comida/ceviche.jpg"},
	{ID:23, nombre:"Huevos Rancheros", image:"images/comida/huevosRancheros.jpg"},
	{ID:24, nombre:"Guacamole", image:"images/comida/guacamole.jpg"},
	{ID:25, nombre:"Pico De Gallo", image:"images/comida/picoDeGallo.jpeg"},
	{ID:26, nombre:"Ate", image:"images/comida/Ate.jpg"},
	{ID:27, nombre:"Empanadas Mexicanas", image:"images/comida/EmpanadasMexicanos.jpg"},
	{ID:28, nombre:"Cochinita Pibil", image:"images/comida/cochinitaPibil.jpg"},
	{ID:29, nombre:"Barbacoa", image:"images/comida/barbacoa.jpg"},
	{ID:30, nombre:"Misiotes", image:"images/comida/misiotes.jpg"},
	{ID:31, nombre:"Chiliatole", image:"images/comida/chiliatole.jpeg"},
	{ID:32, nombre:"Tlacoyos", image:"images/comida/tlacoyos.jpg"},

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
respCorrecta = generateRandomNumber(0, (13-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (13-1));
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
while(respIncorrecta1==respCorrecta || comida[respIncorrecta1].nombre==comida[respCorrecta].nombre){
	respIncorrecta1 = generateRandomNumber(0, (32-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || comida[respIncorrecta2].nombre==comida[respCorrecta].nombre || comida[respIncorrecta2].nombre==comida[respIncorrecta1].nombre){
	respIncorrecta2 = generateRandomNumber(0, (32-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| comida[respIncorrecta3].nombre==comida[respCorrecta].nombre || comida[respIncorrecta3].nombre==comida[respIncorrecta1].nombre || comida[respIncorrecta3].nombre==comida[respIncorrecta2].nombre){
	respIncorrecta3 = generateRandomNumber(0, (32-1));
}

console.log(comida[respCorrecta]);
console.log(comida[respIncorrecta1]);
console.log(comida[respIncorrecta2]);
console.log(comida[respIncorrecta3]);

//changes right image
document.getElementById("img").src=comida[respCorrecta].image;

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
	question.innerHTML = "What is the name of this dish?";
	if(rightButton==1){
		btn1.innerHTML = comida[respCorrecta].nombre;
		btn2.innerHTML = comida[respIncorrecta1].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respCorrecta].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respCorrecta].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respIncorrecta3].nombre;
		btn4.innerHTML = comida[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the name of this dish?";
	if(rightButton==1){
		btn1.innerHTML = comida[respCorrecta].nombre;
		btn2.innerHTML = comida[respIncorrecta1].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respCorrecta].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respCorrecta].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respIncorrecta3].nombre;
		btn4.innerHTML = comida[respCorrecta].nombre;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the name of this dish?";
	if(rightButton==1){
		btn1.innerHTML = comida[respCorrecta].nombre;
		btn2.innerHTML = comida[respIncorrecta1].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respCorrecta].nombre;
		btn3.innerHTML = comida[respIncorrecta2].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respCorrecta].nombre;
		btn4.innerHTML = comida[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = comida[respIncorrecta1].nombre;
		btn2.innerHTML = comida[respIncorrecta2].nombre;
		btn3.innerHTML = comida[respIncorrecta3].nombre;
		btn4.innerHTML = comida[respCorrecta].nombre;
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
