function logText(){
	console.log('hi');
}
logText();

function logText(message){
	console.log(message);
}
logText('hi');

function logText(message){
	return message;
}
let a = logText('hi');

function logText(){
	return 'a';
}
logText();

function logText(){
    console.log('hi');
}

let logText = function(){
    console.log('hi');
}

var logText = function() {
    console.log('hi');
}

var logText = () => {
    console.log('hi');
}

let logText = () => {
	return 'a';
}
logText();

let logMessage = () => 'a';
logMessage();

let logNumber = (num) => {
	return num;
}
logNumber(1);

let age1 = 30;
if(age1>20){
    console.log('만원');
}else{
    console.log('오천원');
}

let age2 = 12;
if(age2>20){
    console.log('만원');
}else{
    console.log('오천원');
}

let total = 0;
for(let i=0; i<6; i++){
    total = total+i;
}