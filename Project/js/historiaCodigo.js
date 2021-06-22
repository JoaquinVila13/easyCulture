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

var historia = [
	{ID:1, nombre:"Agustín De Iturbide", image:"images/historia/Agustín_De_Iturbide.png"},
	{ID:2, nombre:"Antonio De Mendoza", image:"images/historia/Antonio_De_Mendoza.png"},
	{ID:3, nombre:"Benito Juárez", image:"images/historia/Benito_Juárez.png"},
	{ID:4, nombre:"Cuauhtémoc", image:"images/historia/Cuauhtémoc.png"},
	{ID:5, nombre:"Diego Rivera", image:"images/historia/Diego_Rivera.png"},
	{ID:6, nombre:"Emiliano Zapata", image:"images/historia/Emiliano_Zapata.png"},
	{ID:7, nombre:"Francisco I. Madero", image:"images/historia/Francisco_I._Madero.png"},
	{ID:8, nombre:"Francisco Villa", image:"images/historia/Francisco_Villa.png"},
	{ID:9, nombre:"Guadalupe Victoria", image:"images/historia/Guadalupe_Victoria.png"},
	{ID:10, nombre:"Hernán Cortés", image:"images/historia/Hernán_Cortés.png"},
	{ID:11, nombre:"José Guadalupe Posada", image:"images/historia/José_Guadalupe_Posada.png"},
	{ID:12, nombre:"José Vasconcelos", image:"images/historia/José_Vasconcelos.png"},
	{ID:13, nombre:"Lázaro Cárdenas", image:"images/historia/Lázaro_Cárdenas.png"},
	{ID:14, nombre:"Miguel De La Madrid", image:"images/historia/Miguel_De_La_Madrid.png"},
	{ID:15, nombre:"Moctezuma II", image:"images/historia/Moctezuma_II.png"},
	{ID:16, nombre:"Octavio Paz", image:"images/historia/Octavio_Paz.png"},
	{ID:17, nombre:"Porfirio Díaz", image:"images/historia/Porfirio_Díaz.png"}
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
respCorrecta = generateRandomNumber(0, (17-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (17-1));
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
while(respIncorrecta1==respCorrecta || historia[respIncorrecta1].nombre==historia[respCorrecta].nombre){
	respIncorrecta1 = generateRandomNumber(0, (17-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || historia[respIncorrecta2].nombre==historia[respCorrecta].nombre || historia[respIncorrecta2].nombre==historia[respIncorrecta1].nombre){
	respIncorrecta2 = generateRandomNumber(0, (17-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| historia[respIncorrecta3].nombre==historia[respCorrecta].nombre || historia[respIncorrecta3].nombre==historia[respIncorrecta1].nombre || historia[respIncorrecta3].nombre==historia[respIncorrecta2].nombre){
	respIncorrecta3 = generateRandomNumber(0, (17-1));
}

console.log(historia[respCorrecta]);
console.log(historia[respIncorrecta1]);
console.log(historia[respIncorrecta2]);
console.log(historia[respIncorrecta3]);

//changes right image
document.getElementById("img").src=historia[respCorrecta].image;

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

//chooses question to ask ouf of 3 questions (1:name, 2:nombre, 3:nombre)
var questionRand = generateRandomNumber(1, 3);
questionRand=1;
//chooses the button out of the 4 buttons that will display the right answer
var rightButton = generateRandomNumber(1, 4);
console.log("Right answer: Button "+rightButton);
let question = document.getElementById('question');
if (questionRand==1) {
	question.innerHTML = "What is the name of this historical character?";
	if(rightButton==1){
		btn1.innerHTML = historia[respCorrecta].nombre;
		btn2.innerHTML = historia[respIncorrecta1].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respCorrecta].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respCorrecta].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respIncorrecta3].nombre;
		btn4.innerHTML = historia[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the name of this Mexican historical figure?";
	if(rightButton==1){
		btn1.innerHTML = historia[respCorrecta].nombre;
		btn2.innerHTML = historia[respIncorrecta1].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respCorrecta].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respCorrecta].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respIncorrecta3].nombre;
		btn4.innerHTML = historia[respCorrecta].nombre;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the name of this Mexican historical figure?";
	if(rightButton==1){
		btn1.innerHTML = historia[respCorrecta].nombre;
		btn2.innerHTML = historia[respIncorrecta1].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respCorrecta].nombre;
		btn3.innerHTML = historia[respIncorrecta2].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respCorrecta].nombre;
		btn4.innerHTML = historia[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = historia[respIncorrecta1].nombre;
		btn2.innerHTML = historia[respIncorrecta2].nombre;
		btn3.innerHTML = historia[respIncorrecta3].nombre;
		btn4.innerHTML = historia[respCorrecta].nombre;
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
