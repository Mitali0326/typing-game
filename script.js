const random_quote_API_URL ="https://api.quotable.io/random";
const quoteDisplay =document.getElementById('quoteDisplay')
const quoteInput =document.getElementById('quoteInput')
const timerel =document.getElementById('timer')


quoteInput.addEventListener('input' , ()=>{
 const arrayQuote = quoteDisplay.querySelectorAll('span')
 const arrayValue = quoteInput.value.split('')
 let correct = true
 arrayQuote.forEach((charecterSpan , index) =>{
   const charecter = arrayValue[index]
   if( charecter == null){
     charecterSpan.classList.remove('correct')
     charecterSpan.classList.remove('incorrect')
     correct = false
   }else if (charecterSpan.innerText === charecter){
     charecterSpan.classList.add('correct')
     charecterSpan.classList.remove('incorrect')
   }else{
    charecterSpan.classList.remove('correct')
    charecterSpan.classList.add('incorrect') 
    correct = false

   }
 })
 if(correct) {
   renderNewQuote();
 }

})
function getRandomQuote(){
  return fetch(random_quote_API_URL)
  .then(response => response.json())
  .then(data => data.content)
}

async function renderNewQuote(){
  const quote = await getRandomQuote()
   
   quote.split('').forEach(charecter => {
     const charecterSpan = document.createElement('span')
     charecterSpan.innerText= charecter;
     quoteDisplay.appendChild(charecterSpan);     
   });
   quoteInput.value =null;
   startTimer();
}
let startTime ;
function startTimer(){
  timerel.innerText = 0;

  startTime = new Date() 
  setInterval(() => {
    timer.innerText=getTimerTime();
    getTimerTime();
  }, 1000);

}
function getTimerTime(){
  const time = Math.floor((new Date() - startTime) /1000)
 return time

}
renderNewQuote();