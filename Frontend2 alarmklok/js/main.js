var hourUp = document.getElementById("js--hour-up"); //Ophalen van element "js--hour-up"
var timer = null;
var hourDown = document.getElementById("js--hour-down"); //Ophalen van element "js--hour-down"
var hour = 0; //Ophalen van element hour die bij 0 begint
var minute = 0; //Ophalen van element minute die bij 0 begint
var timeHour = document.getElementById("js--time-hour"); //Ophalen van element "js--time-hour"
var timeMinute = document.getElementById("js--time-minute"); //Ophalen van element "js--time-minute"
var dialogue = document.getElementById("js--dialogue") //Ophalen van element "js--dialogue"


hourUp.onclick = function () { //Functie die wordt uitgevoerd als je op de knop klikt om het uur te verhogen
    hour += 1; //verhogen hour met 1
    if (hour > 23) { //Hour terug naar 0 als die boven het maximum van 23 komt
        hour = 0;
    }
    if (hour < 10) {
        timeHour.innerText = "0" + hour; //Voegt een extra 0 toe voorin hour als hour kleiner dan 10 is
    }
    else {
        timeHour.innerText = hour; //Toon ander zonder de extra 0 voorin hour
    }
}

hourDown.onclick = function () { //Functie die wordt uitgevoerd als je op de knop klikt om het uur te verlagen
    hour -= 1; //verlagen hour met 1
    if (hour < 0) { //Hour terug naar 23 als die onder het minimum van 0 komt
        hour = 23;
    }
    if (hour < 10) {
        timeHour.innerText = "0" + hour; //Voegt een extra 0 toe voorin hour als hour kleiner dan 10 is
    }
    else {
        timeHour.innerText = hour; //Toon ander zonder de extra 0 voorin hour
    
    }
}



var minuteUp = document.getElementById("js--minute-up"); //Ophalen van element "js--minute-up"
var minuteDown = document.getElementById("js--minute-down"); //Ophalen van element "js--minute-up"


minuteUp.onclick = function () { //Functie die wordt uitgevoerd als je op de minuteup knop klikt om de minuten te verhogen
    minute += 1; //verhoog minute met 1 
    if (minute > 59) { //minute terug naar 0 als die boven het maximum van 59 komt
        minute = 0;
    }
    if (minute < 10) {
        timeMinute.innerText = "0" + minute; //Voegt een extra 0 toe voorin hour als hour kleiner dan 10 is
    }
    else {
        timeMinute.innerText = minute; //Toon anders hour zonder de extra 0 voorin hour
    }
}

minuteDown.onclick = function () { //Functie die wordt uitgevoerd als je op de knop klikt om de minuten te verhogen
    minute -= 1; //verlagen minute met 1
    if (minute < 0) { //Hour terug naar 0 als die boven het maximum van 59 komt
        minute = 59;
    }
    if (minute < 10) {
        timeMinute.innerText = "0" + minute; //Voegt een extra 0 toe voorin hour als hour kleiner dan 10 is
    }
    else {
        timeMinute.innerText = minute; //Toon anders hour zonder de extra 0 voorin hour
    }
}

var toggle = document.getElementById("js--toggle"); //Ophalen van element "js--toggle"
var timer = null; //Ophalen van element timer die bij 0 begint
toggle.checked = false; //toggle staat standaard uit
var getTimerOut = null; //Ophalen van element getTimerOut die bij 0 begint
var dialogue = document.getElementById("js--dialogue"); //Ophalen van element "js--minute-up"
var audio  = new Audio("/sounds/731471__christian_criscitiello__ringtone-13.wav") //alarmgeluid in de vorm van een audioobject

toggle.onchange = function () { //Functie die wordt uitgevoerd als de toggle een verandering(switch van plaats) dedacteerd 
    if (toggle.checked === true) { //Als de toggle aanstaat
        dialogue.innerHTML = "Je alarm is gezet om " + hour + " uur en " + minute + " minuten."; //display de strings en elementen
        toggle.classList.add("alarm__toggle--checked"); //Verander de style van toggle
        dialogue.style.display = "flex"; //Toon in het dialoogvenster
       
        var getTimerOut = setTimeout(function () {//Functie die wordt uitgevoerd als getTimerOut en setTimeout gelijkwaardig zijn
            dialogue.style.display = "none"; // Verbergen van het dialoogvenster na 3.5secondes
        }, 3500)

        setInterval(function () {  //Functie die controleert of de tijd overeenkomt met de huidige tijd
            var date = new Date(); //Ophalen van de actuele tijd
            var dateHour = date.getHours(); //14 Ophalen van actueel uur
            var dateMinute = date.getMinutes(); //36 Ophalen van actuele minuten

            if (hour === dateHour && minute === dateMinute) {
                audio.play() //Speel alarmgeluid als if statment correct is
            }

        }, 1000) //Controleren van elke seconde
    }
    else {
        dialogue.style.display = "none"; //geen display van het dialoogvenster
        toggle.classList.remove("alarm__toggle--checked");//verwijder de klasse als toggle uitstaat
        clearTimeout(getTimerOut); //stopt  timer van het dialoogvenster
        clearInterval(timer); //Stopt het interval die controleert of de tijd overeenkomt met de huidige tijd

    }

    // if (toggle.checked === true){
    //     console.log("Het is gechecked");
    // }
    // else {
    // console.log("Niet gecheked");
    // }
}

var dialogue = document.getElementById("js--dialogue") //Ophalen van element "js--dialogue"


