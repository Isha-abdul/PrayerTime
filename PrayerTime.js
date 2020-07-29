
let morningPrayer=3;
let noonPrayer=13;
let lateAfternoonPrayer=17;
let eveningPrayer=20;
let nightPrayer=22
let midNightPrayer=2;
let image='images/masji1.jpg';
let messageText= 'We are happy people in Kamsack';


//a function that shows the current time on the page
function showCurrentTime(){

let clock=document.getElementById('clock');

let currentTime=new Date();

let hours=currentTime.getHours();
let minutes=currentTime.getMinutes();
let seconds=currentTime.getSeconds();
let meridian='AM';
if(hours >=12){
 meridian='PM';
}

if (hours > 12){
    hours=hours-12;
}

if (minutes < 10){
   minutes= '0'+ minutes;
}

if (seconds< 10){
    seconds='0'+seconds;
}

let clockTime=hours + ':'+ minutes+ ':'+ seconds+ meridian+ '!';
clock.innerText=clockTime;
}

 // a funtion that make the image change
function setImages(){

let prayerMessage= document.getElementById('prayerTimeMessage');
let prayerTimeImage=document.getElementById('masjid');
 
let prayerTime=new Date().getHours();

if(prayerTime==midNightPrayer){
    image ='images/tahajud.jpg';
    messageText='Try to offer the midnight prayer!!';
    }
if(prayerTime==morningPrayer){
image ='images/subhi prayer.jpg';
messageText='It is time for morning prayer!!';
}
else if (prayerTime==noonPrayer){
    image='images/dzuhr prayer.jpg';
    messageText= 'It is time for noon prayer!!';
}
else if (prayerTime==lateAfternoonPrayer){
    image='images/asr prayer.jpg';
    messageText= 'It is time for late afetrnoon prayer!!';
}
else if (prayerTime==eveningPrayer){
    image='images/magrib prayer.jpg';
    messageText= 'It is time for evening prayer!!';
}
else if (prayerTime==nightPrayer){
    image='images/ishai prayer.jpg';
    messageText= 'It is time for night prayer!!';
}
else{
    image='images/masji1.jpg';
    messageText= 'We are a happy people in Kamsack!! ';
}

prayerMessage.innerText=messageText;
prayerTimeImage.src=image;
showCurrentTime();
}
setImages();


//getting the time to set every second
let secondsIncreament= 1000;
setInterval(setImages, secondsIncreament);


//chnging the nightparyetTime time based on use selection
 let midNightPrayerTimeSelector=document.getElementById('tahajudSelector');
 //function nightPrayer(){
  //  tahhajjud=tahajudTimeSelector.this.value;
 //}
 //tahajudTimeSelector.addEventListener('change',nightPrayer);
tahajudTimeSelector.addEventListener('change', (event)=>{
  midNightPrayer=midNightPrayerTimeSelector.value;});
