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

var estados = [
	{ID:1, nombre:"Aguascalientes", image:"images/estados/Aguascalientes.png", capital:"Aguascalientes", region:"Centronorte"},
	{ID:2, nombre:"Baja California", image:"images/estados/Baja_California.png", capital:"Mexicali", region:"Noroeste"},
	{ID:3, nombre:"Baja California Sur", image:"images/estados/Baja_California_Sur.png", capital:"La Paz", region:"Noroeste"},
	{ID:4, nombre:"Campeche", image:"images/estados/Campeche.png", capital:"San Francisco de Campeche", region:"Sureste"},
	{ID:5, nombre:"Chiapas", image:"images/estados/Chiapas.png", capital:"Tuxtla Gutiérrez", region:"Suroeste"},
	{ID:6, nombre:"Chihuahua", image:"images/estados/Chihuahua.png", capital:"Chihuahua", region:"Noroeste"},
	{ID:7, nombre:"Ciudad de México", image:"images/estados/CDMX.png", capital:"-", region:"Centrosur"},
	{ID:8, nombre:"Coahuila de Zaragoza", image:"images/estados/Coahuila.png", capital:"Saltillo", region:"Noreste"},
	{ID:9, nombre:"Colima", image:"images/estados/Colima.png", capital:"Colima", region:"Occidente"},
	{ID:10, nombre:"Durango", image:"images/estados/Durango.png", capital:"Victoria de Durango", region:"Noroeste"},
	{ID:11, nombre:"Guanajuato", image:"images/estados/Guanajuato.png", capital:"Guanajuato", region:"Centronorte"},
	{ID:12, nombre:"Guerrero", image:"images/estados/Guerrero.png", capital:"Chilpancingo de los Bravo", region:"Suroeste"},
	{ID:13, nombre:"Hidalgo", image:"images/estados/Hidalgo.png", capital:"Pachuca de Soto", region:"Oriente"},
	{ID:14, nombre:"Jalisco", image:"images/estados/Jalisco.png", capital:"Guadalajara", region:"Occidente"},
	{ID:15, nombre:"México", image:"images/estados/Mexico.png", capital:"Toluca de Lerdo", region:"Centrosur"},
	{ID:16, nombre:"Michoacán de Ocampo", image:"images/estados/Michoacan.png", capital:"Morelia", region:"Occidente"},
	{ID:17, nombre:"Morelos", image:"images/estados/Morelos.png", capital:"Cuernavaca", region:"Centrosur"},
	{ID:18, nombre:"Nayarit", image:"images/estados/Nayarit.png", capital:"Tepic", region:"Occidente"},
	{ID:19, nombre:"Nuevo León", image:"images/estados/Nuevo_Leon.png", capital:"Monterrey", region:"Noreste"},
	{ID:20, nombre:"Oaxaca", image:"images/estados/Oaxaca.png", capital:"Oaxaca de Juárez", region:"Suroeste"},
	{ID:21, nombre:"Puebla", image:"images/estados/Puebla.png", capital:"Puebla de Zaragoza", region:"Oriente"},
	{ID:22, nombre:"Querétaro", image:"images/estados/Queretaro.png", capital:"Santiago de Querétaro", region:"Centronorte"},
	{ID:23, nombre:"Quintana Roo", image:"images/estados/Quintana_Roo.png", capital:"Chetumal", region:"Sureste"},
	{ID:24, nombre:"San Luis Potosí", image:"images/estados/San_Luis_Potosi.png", capital:"San Luis Potosí", region:"Centronorte"},
	{ID:25, nombre:"Sinaloa", image:"images/estados/Sinaloa.png", capital:"Culiacán Rosales", region:"Noroeste"},
	{ID:26, nombre:"Sonora", image:"images/estados/Sonora.png", capital:"Hermosillo", region:"Noroeste"},
	{ID:27, nombre:"Tabasco", image:"images/estados/Tabasco.png", capital:"Villahermosa", region:"Sureste"},
	{ID:28, nombre:"Tamaulipas", image:"images/estados/Tamaulipas.png", capital:"Ciudad Victoria", region:"Noreste"},
	{ID:29, nombre:"Tlaxcala", image:"images/estados/Tlaxcala.png", capital:"Tlaxcala de Xicohténcatl", region:"Oriente"},
	{ID:30, nombre:"Veracruz de Ignacio de la Llave", image:"images/estados/Veracruz.png", capital:"Xalapa-Enríquez", region:"Oriente"},
	{ID:31, nombre:"Yucatán", image:"images/estados/Yucatan.png", capital:"Mérida", region:"Sureste"},
	{ID:32, nombre:"Zacatecas", image:"images/estados/Zacatecas.png", capital:"Zacatecas", region:"Centronorte"},

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
respCorrecta = generateRandomNumber(0, (32-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (32-1));
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
//makes sure there are no repeated options, diferent states could belong to the same region
while(respIncorrecta1==respCorrecta || estados[respIncorrecta1].region==estados[respCorrecta].region){
	respIncorrecta1 = generateRandomNumber(0, (32-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || estados[respIncorrecta2].region==estados[respCorrecta].region || estados[respIncorrecta2].region==estados[respIncorrecta1].region){
	respIncorrecta2 = generateRandomNumber(0, (32-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| estados[respIncorrecta3].region==estados[respCorrecta].region || estados[respIncorrecta3].region==estados[respIncorrecta1].region || estados[respIncorrecta3].region==estados[respIncorrecta2].region){
	respIncorrecta3 = generateRandomNumber(0, (32-1));
}

console.log(estados[respCorrecta]);
console.log(estados[respIncorrecta1]);
console.log(estados[respIncorrecta2]);
console.log(estados[respIncorrecta3]);

//changes right image
document.getElementById("img").src=estados[respCorrecta].image;

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let btn4 = document.getElementById('button4');

//chooses question to ask ouf of 3 questions (1:name, 2:capital, 3:region)
var questionRand = generateRandomNumber(1, 1);

//chooses the button out of the 4 buttons that will display the right answer
var rightButton = generateRandomNumber(1, 4);
console.log("Right answer: Button "+rightButton);
let question = document.getElementById('question');
if (questionRand==1) {
	question.innerHTML = "What is the name of this state?";
	if(rightButton==1){
		btn1.innerHTML = estados[respCorrecta].nombre;
		btn2.innerHTML = estados[respIncorrecta1].nombre;
		btn3.innerHTML = estados[respIncorrecta2].nombre;
		btn4.innerHTML = estados[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = estados[respIncorrecta1].nombre;
		btn2.innerHTML = estados[respCorrecta].nombre;
		btn3.innerHTML = estados[respIncorrecta2].nombre;
		btn4.innerHTML = estados[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = estados[respIncorrecta1].nombre;
		btn2.innerHTML = estados[respIncorrecta2].nombre;
		btn3.innerHTML = estados[respCorrecta].nombre;
		btn4.innerHTML = estados[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = estados[respIncorrecta1].nombre;
		btn2.innerHTML = estados[respIncorrecta2].nombre;
		btn3.innerHTML = estados[respIncorrecta3].nombre;
		btn4.innerHTML = estados[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the capital of this state?";
	if(rightButton==1){
		btn1.innerHTML = estados[respCorrecta].capital;
		btn2.innerHTML = estados[respIncorrecta1].capital;
		btn3.innerHTML = estados[respIncorrecta2].capital;
		btn4.innerHTML = estados[respIncorrecta3].capital;
	}else if(rightButton==2){
		btn1.innerHTML = estados[respIncorrecta1].capital;
		btn2.innerHTML = estados[respCorrecta].capital;
		btn3.innerHTML = estados[respIncorrecta2].capital;
		btn4.innerHTML = estados[respIncorrecta3].capital;
	}else if(rightButton==3){
		btn1.innerHTML = estados[respIncorrecta1].capital;
		btn2.innerHTML = estados[respIncorrecta2].capital;
		btn3.innerHTML = estados[respCorrecta].capital;
		btn4.innerHTML = estados[respIncorrecta3].capital;
	}else if(rightButton==4){
		btn1.innerHTML = estados[respIncorrecta1].capital;
		btn2.innerHTML = estados[respIncorrecta2].capital;
		btn3.innerHTML = estados[respIncorrecta3].capital;
		btn4.innerHTML = estados[respCorrecta].capital;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the region of this state?";
	if(rightButton==1){
		btn1.innerHTML = estados[respCorrecta].region;
		btn2.innerHTML = estados[respIncorrecta1].region;
		btn3.innerHTML = estados[respIncorrecta2].region;
		btn4.innerHTML = estados[respIncorrecta3].region;
	}else if(rightButton==2){
		btn1.innerHTML = estados[respIncorrecta1].region;
		btn2.innerHTML = estados[respCorrecta].region;
		btn3.innerHTML = estados[respIncorrecta2].region;
		btn4.innerHTML = estados[respIncorrecta3].region;
	}else if(rightButton==3){
		btn1.innerHTML = estados[respIncorrecta1].region;
		btn2.innerHTML = estados[respIncorrecta2].region;
		btn3.innerHTML = estados[respCorrecta].region;
		btn4.innerHTML = estados[respIncorrecta3].region;
	}else if(rightButton==4){
		btn1.innerHTML = estados[respIncorrecta1].region;
		btn2.innerHTML = estados[respIncorrecta2].region;
		btn3.innerHTML = estados[respIncorrecta3].region;
		btn4.innerHTML = estados[respCorrecta].region;
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
