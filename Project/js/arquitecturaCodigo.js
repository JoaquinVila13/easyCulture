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

var arquitectura = [
	{ID:1, nombre:"Angel de la Independencia", image:"images/arquitectura/angel_de_la independencia.JPG"},
	{ID:2, nombre:"Ave Fenix", image:"images/arquitectura/ave_fenix.JPG"},
	{ID:3, nombre:"Palacio de Bellas Artes", image:"images/arquitectura/Palacio_de__bellas_artes.JPG"},
	{ID:4, nombre:"Castillo de Chapultepec", image:"images/arquitectura/castillo_de_chapultepec.JPG"},
	{ID:5, nombre:"Catedral Metropolitana", image:"images/arquitectura/catedral_metropolitana.JPG"},
	{ID:6, nombre:"Hospital público Dr. Manuel Gea González", image:"images/arquitectura/hospital.JPG"},
	{ID:7, nombre:"Iglesia Santa Maria", image:"images/arquitectura/iglesia_santa_maria.JPG"},
	{ID:8, nombre:"Jardín Escultórico Edward James", image:"images/arquitectura/jardin.JPG"},
	{ID:9, nombre:"Mercado Roma", image:"images/arquitectura/mercado_roma.JPG"},
	{ID:10, nombre:"Museo Subacuático del Arte", image:"images/arquitectura/meseo_subacuatico.JPG"},
	{ID:11, nombre:"Monumento a la Revolucion Mexicana", image:"images/arquitectura/monumeto_a_la_revolucion.JPG"},
	{ID:12, nombre:"Museo Frida Kahlo", image:"images/arquitectura/musea_frida.JPG"},
	{ID:13, nombre:"Museo Internacional del Barroco", image:"images/arquitectura/barroco.JPG"},
	{ID:14, nombre:"Museo Soumaya", image:"images/arquitectura/museo_soumaya.JPG"},
	{ID:15, nombre:"Palacio Nacional", image:"images/arquitectura/palacio_nacional.JPG"},
	{ID:16, nombre:"Torre 41", image:"images/arquitectura/torre41.JPG"},
	{ID:17, nombre:"Torre BBVA", image:"images/arquitectura/torre_bbva.JPG"},
	{ID:18, nombre:"Torre Mayor", image:"images/arquitectura/torre_mayor.JPG"},
	{ID:19, nombre:"Torre Latinoamericana", image:"images/arquitectura/torre_latinoamericana.JPG"},
	{ID:20, nombre:"Torre Reforma", image:"images/arquitectura/torre_reforma.JPG"}
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
respCorrecta = generateRandomNumber(0, (20-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (20-1));
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
while(respIncorrecta1==respCorrecta || arquitectura[respIncorrecta1].nombre==arquitectura[respCorrecta].nombre){
	respIncorrecta1 = generateRandomNumber(0, (20-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || arquitectura[respIncorrecta2].nombre==arquitectura[respCorrecta].nombre || arquitectura[respIncorrecta2].nombre==arquitectura[respIncorrecta1].nombre){
	respIncorrecta2 = generateRandomNumber(0, (20-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| arquitectura[respIncorrecta3].nombre==arquitectura[respCorrecta].nombre || arquitectura[respIncorrecta3].nombre==arquitectura[respIncorrecta1].nombre || arquitectura[respIncorrecta3].nombre==arquitectura[respIncorrecta2].nombre){
	respIncorrecta3 = generateRandomNumber(0, (20-1));
}

console.log(arquitectura[respCorrecta]);
console.log(arquitectura[respIncorrecta1]);
console.log(arquitectura[respIncorrecta2]);
console.log(arquitectura[respIncorrecta3]);

//changes right image
document.getElementById("img").src=arquitectura[respCorrecta].image;

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

//chooses question to ask ouf of 3 questions (1:name, 2:nombre, 3:nombre)
var questionRand = generateRandomNumber(1, 3);
questionRand = 1;
//chooses the button out of the 4 buttons that will display the right answer
var rightButton = generateRandomNumber(1, 4);
console.log("Right answer: Button "+rightButton);
let question = document.getElementById('question');
if (questionRand==1) {
	question.innerHTML = "What is the name of this building?";
	if(rightButton==1){
		btn1.innerHTML = arquitectura[respCorrecta].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respCorrecta].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respCorrecta].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta3].nombre;
		btn4.innerHTML = arquitectura[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the name of this Mexican arquitecture?";
	if(rightButton==1){
		btn1.innerHTML = arquitectura[respCorrecta].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respCorrecta].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respCorrecta].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta3].nombre;
		btn4.innerHTML = arquitectura[respCorrecta].nombre;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the name of this Mexican arquitecture?";
	if(rightButton==1){
		btn1.innerHTML = arquitectura[respCorrecta].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respCorrecta].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respCorrecta].nombre;
		btn4.innerHTML = arquitectura[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = arquitectura[respIncorrecta1].nombre;
		btn2.innerHTML = arquitectura[respIncorrecta2].nombre;
		btn3.innerHTML = arquitectura[respIncorrecta3].nombre;
		btn4.innerHTML = arquitectura[respCorrecta].nombre;
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
