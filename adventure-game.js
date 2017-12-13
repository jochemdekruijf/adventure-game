
document.getElementById('button-1').innerHTML = "Start";
document.getElementById('button-2').style.display = "none";
document.getElementById('button-3').style.display = "none";
document.getElementById('key').style.display = "none";

function Level1(){
 document.getElementById('start').style.display = "none";
 document.getElementById('title').innerHTML = "Level 1";
 document.getElementById('intro').innerHTML = "Je komt het kasteel binnen en je wilt de deur open maken zoek naar de sleutel";
 document.getElementById('button-1').style.display = "inline";
 document.getElementById('button-2').style.display = "inline";
 document.getElementById('button-3').style.display = "inline";
 document.getElementById('button-1').innerHTML = "Ga naar binnen";
 document.getElementById('button-2').innerHTML = "Keer terug naar huis";
 document.getElementById('button-3').innerHTML = "Wacht en doe niets ";
 document.getElementById('key').style.display = "none";
 var body = document.getElementsByTagName('body')[0];
 body.style.background = "url(binnenplaats.jpg)";
 body.style.backgroundSize = 'cover';
 document.getElementById('button-1').setAttribute("onClick","javascript:Level2();")
 document.getElementById('button-2').setAttribute("onClick","javascript:Level();")
 document.getElementById('button-3').setAttribute("onClick","javascript:Level();")


}
function Level2(){
document.getElementById('title').innerHTML = "Level 2";
document.getElementById('intro').innerHTML = "Je bent nu in een gang welke kant ga je op aan het einde van de gang?";
document.getElementById('button-1').innerHTML = "Links";
document.getElementById('button-2').innerHTML = "Rechtdoor";
document.getElementById('button-3').innerHTML = "rechts ";
document.getElementById('key').style.display = "none";
var body = document.getElementsByTagName('body')[0];
 body.style.background = "url(gang.jpg)";
 body.style.backgroundSize = 'cover';
 document.getElementById('button-1').onclick = GoToLevel3;
}
key= false;
document.getElementById('button-3').onclick= function(){
document.getElementById('title').innerHTML = "Level 3";
document.getElementById('intro').innerHTML = "Je staat voor een deur wat doe je nu?";
document.getElementById('button-1').innerHTML = "probeer de deur open te breken";
document.getElementById('button-2').innerHTML = "kijk of de deur al open is ";
document.getElementById('button-3').innerHTML = "open de deur met een sleutel";
document.getElementById('key').style.display = "block";
var body = document.getElementsByTagName('body')[0];
 body.style.background = "url(deur3.jpg)";
 body.style.backgroundSize = 'cover';
 document.getElementById('button-3').onclick = function(){
 	if (key==true){

  }
  else{
  	alert("Zoek de sleutel!");
  }
 }
 document.getElementById('key').onclick = function(){
  document.getElementById('key').style.display = "none";
  key = true;
 }
}

