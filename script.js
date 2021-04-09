
const random_quote_API_URL ="https://api.quotable.io/random";
const setofwords =[
"Because of the laboriousness of the translation process, since the 1940s efforts have been made.." ,
"Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines."," The different areas of web design include web graphic design." ,
"Business casual is an ambiguously defined dress code that has been adopted by many professional and white-collar workplaces in Western countries. ", "It entails neat yet casual attire and is generally more casual than informal attire but more formal than casual or smart casual attire. Casual Fridays preceded widespread acceptance of business casual attire in many offices." ,
"interface design; authoring, including standardised code and proprietary ", "software; user experience design; and  search engine optimization"]

const msg = document.getElementById('msg');

const typeWords = document.getElementById('mywords');

const btn = document.getElementById('btn');

let startTime , endTime;
function playGame(){
typeWords.value = "";
let randomNumber = Math.floor(Math.random()*setofwords.length);
console.log(randomNumber);  
msg.innerText= setofwords[randomNumber];
 let date = new Date();
 startTime= date.getTime();
 btn.innerText="Done";
}
function endGame(){
  let date = new Date(); 
  endTime =  date.getTime();
  let totalTime = ((endTime - startTime)/1000)

  let totalString = typeWords.value;
  let wordCount = wordCounter(totalString);

  let speed = Math.round((wordCount/ totalTime)*60)
  let finalMsg ="You typed total at a speed of " + speed + " words per minutes in which " ;
  finalMsg += compareWords(msg.innerText , totalString);
  msg.innerText= finalMsg;
  btn.innerText = "START";
}

function wordCounter(str){
  let response = str.split(" ").length;
  return response ;
}
function compareWords(str1, str2){
let words1= str1.split(" ");
let words2= str2.split(" ");
let cnt =0;
words1.forEach(function (item , index){
  if(item == words2[index]){
    cnt++
  }
})
let errorWords = (words1.length - cnt);
return (cnt +" were correct out of " + words1.length + " words and misstyped words were " + errorWords + " .");
}


 
btn.addEventListener( 'click' , function (){

  if(btn.innerText == "START"){
    typeWords.disable = false;
    playGame();

  }
  else if(btn.innerText == "DONE"){
    typeWords.disable = true;
    endGame();

  }


})


