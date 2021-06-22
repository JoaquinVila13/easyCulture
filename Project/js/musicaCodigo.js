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

var musica = [
	{ID:1, nombre:"Agustin Lara", image:"images/musica/agustin_lara.JPG"},
	{ID:2, nombre:"Belinda", image:"images/musica/belinda.JPG"},
	{ID:3, nombre:"Carlos Santana", image:"images/musica/carlos_santana.JPG"},
	{ID:4, nombre:"Cristian Castro", image:"images/musica/cristian_castro.JPG"},
	{ID:5, nombre:"Gloria Trevi", image:"images/musica/gloria _trevi.JPG"},
	{ID:6, nombre:"Jose Alfredo Jimenez", image:"images/musica/jose_alfredo_jimenez.JPG"},
	{ID:7, nombre:"Jose Jose", image:"images/musica/jose_jose.JPG"},
	{ID:8, nombre:"Juan Gabriel", image:"images/musica/juan_gabriel.JPG"},
	{ID:9, nombre:"Julieta Venegas", image:"images/musica/julieta_venegas.JPG"},
	{ID:10, nombre:"Leonel Garcia", image:"images/musica/Leonel_Garcia.JPG"},
	{ID:11, nombre:"Lila Downs", image:"images/musica/lila_downs.JPG"},
	{ID:12, nombre:"Luis Miguel", image:"images/musica/luis_miguel.JPG"},
	{ID:13, nombre:"Manuel Mijares", image:"images/musica/manuel_mijares.JPG"},
	{ID:14, nombre:"Maria Felix", image:"images/musica/maria_felix.JPG"},
	{ID:15, nombre:"Maria Jose", image:"images/musica/maria_jose.JPG"},
	{ID:16, nombre:"Paty Cantu", image:"images/musica/paty_cantu.JPG"},
	{ID:17, nombre:"Pedro Infante", image:"images/musica/pedro_infante.JPG"},
	{ID:18, nombre:"Placido Domingo", image:"images/musica/placido_domingo.JPG"},
	{ID:19, nombre:"Vicente Fernandez", image:"images/musica/vicente_fernandez.JPG"},
	{ID:20, nombre:"Ximena Sariñana", image:"images/musica/ximena_sariñana.JPG"},
	{ID:21, nombre:"Chavela Vargas", image:"images/musica/chavela.png"}
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
respCorrecta = generateRandomNumber(0, (21-1));

//no repeated questions
var j=0;
while(j!=r){
	if (respCorrecta == repeated[j]) {
		respCorrecta = generateRandomNumber(0, (21-1));
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
while(respIncorrecta1==respCorrecta || musica[respIncorrecta1].nombre==musica[respCorrecta].nombre){
	respIncorrecta1 = generateRandomNumber(0, (21-1));
}
while(respIncorrecta2==respCorrecta || respIncorrecta2==respIncorrecta1 || musica[respIncorrecta2].nombre==musica[respCorrecta].nombre || musica[respIncorrecta2].nombre==musica[respIncorrecta1].nombre){
	respIncorrecta2 = generateRandomNumber(0, (21-1));
}
while(respIncorrecta3==respCorrecta || respIncorrecta3==respIncorrecta1 || respIncorrecta3== respIncorrecta2|| musica[respIncorrecta3].nombre==musica[respCorrecta].nombre || musica[respIncorrecta3].nombre==musica[respIncorrecta1].nombre || musica[respIncorrecta3].nombre==musica[respIncorrecta2].nombre){
	respIncorrecta3 = generateRandomNumber(0, (21-1));
}

console.log(musica[respCorrecta]);
console.log(musica[respIncorrecta1]);
console.log(musica[respIncorrecta2]);
console.log(musica[respIncorrecta3]);

//changes right image
document.getElementById("img").src=musica[respCorrecta].image;

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
	question.innerHTML = "What is the name of this singer?";
	if(rightButton==1){
		btn1.innerHTML = musica[respCorrecta].nombre;
		btn2.innerHTML = musica[respIncorrecta1].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respCorrecta].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respCorrecta].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respIncorrecta3].nombre;
		btn4.innerHTML = musica[respCorrecta].nombre;
	}
}

else if (questionRand==2) {
	question.innerHTML = "What is the name of this maxican artist?";
	if(rightButton==1){
		btn1.innerHTML = musica[respCorrecta].nombre;
		btn2.innerHTML = musica[respIncorrecta1].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respCorrecta].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respCorrecta].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respIncorrecta3].nombre;
		btn4.innerHTML = musica[respCorrecta].nombre;
	}

}if (questionRand==3) {
	question.innerHTML = "What is the name of this maxican artist?";
	if(rightButton==1){
		btn1.innerHTML = musica[respCorrecta].nombre;
		btn2.innerHTML = musica[respIncorrecta1].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==2){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respCorrecta].nombre;
		btn3.innerHTML = musica[respIncorrecta2].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==3){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respCorrecta].nombre;
		btn4.innerHTML = musica[respIncorrecta3].nombre;
	}else if(rightButton==4){
		btn1.innerHTML = musica[respIncorrecta1].nombre;
		btn2.innerHTML = musica[respIncorrecta2].nombre;
		btn3.innerHTML = musica[respIncorrecta3].nombre;
		btn4.innerHTML = musica[respCorrecta].nombre;
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
