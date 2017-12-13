
 document.getElementById('button-1').style.display = "none";
 document.getElementById('button-3').style.display = "none";
 document.getElementById('key').style.display = "none";
  document.getElementById('draak').style.display = "none";
 document.getElementById('button-2').onclick = Level1;
  document.getElementById('Win').pause();
  document.getElementById('Lose').pause();

function Level1() {
 document.getElementById('button-1').onclick = Level2;
 document.getElementById('button-2').onclick = die;
 document.getElementById('button-3').onclick = die;
 document.getElementById('title').innerHTML = "Level 1";
 document.getElementById('intro').innerHTML = "Je staat voor een deur. Ga je naar binnen?";
 document.getElementById('button-1').style.display = "inline";
 document.getElementById('button-2').style.display = "inline";
 document.getElementById('button-3').style.display = "inline";
 document.getElementById('button-1').innerHTML = "Ga naar binnen";
 document.getElementById('button-2').innerHTML = "Keer terug naar huis";
 document.getElementById('button-3').innerHTML = "Wacht en doe niets ";
  document.getElementById('draak').style.display = "none";
 document.getElementById('key').style.display = "none";
 var body = document.getElementsByTagName('body')[0];
  body.style.background = "url(binnenplaats.jpg)";
  body.style.backgroundSize = 'cover';
  document.getElementById('Win').pause();
  document.getElementById('Lose').pause();
  document.getElementById('theme').play(); 

}

function Level2(){
  document.getElementById('button-3').onclick = Level3;
  document.getElementById('button-1').onclick = die;
  document.getElementById('button-2').onclick = die;
  document.getElementById('title').innerHTML = "Level 2";
  document.getElementById('intro').innerHTML = "Je bent nu in een gang welke kant ga je op aan het einde van de gang?";
  document.getElementById('button-1').innerHTML = "Links";
  document.getElementById('button-2').innerHTML = "Rechtdoor";
  document.getElementById('button-3').innerHTML = "rechts ";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "none";
   var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(gang.jpg)";
    body.style.backgroundSize = 'cover';
    document.getElementById('Win').pause();
    document.getElementById('Lose').pause();
}

var key = false;
function Level3(){
  document.getElementById('button-3').onclick = Level4;
  document.getElementById('button-2').onclick = die;
  document.getElementById('button-1').onclick = die;
  document.getElementById('title').innerHTML = "Level 3";
  document.getElementById('intro').innerHTML = "Je staat voor een deur wat doe je nu?";
  document.getElementById('button-1').innerHTML = "probeer de deur open te breken";
  document.getElementById('button-2').innerHTML = "kijk of de deur al open is";
  document.getElementById('button-3').innerHTML = "open de deur met een sleutel";
  document.getElementById('key').style.display = "block";
   document.getElementById('draak').style.display = "none";
   document.getElementById('Win').pause();
   document.getElementById('Lose').pause();

     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(deur3.jpg)";
    body.style.backgroundSize = 'cover';
    
    document.getElementById('button-3').onclick = function(){
 	if (key){
 		Level4();
	}
	else{
	 alert("Zoek de sleutel!");
	 }
	 document.getElementById('key').onclick = function(){
	  document.getElementById('key').style.display = "none";
	  key = true;
	  }
	 }
	}
  var draak =false;
 function Level4(){
  document.getElementById('button-1').onclick = Level5;
  document.getElementById('button-3').onclick = die;
  document.getElementById('button-2').onclick = die;
  document.getElementById('title').innerHTML = "Level 4";
  document.getElementById('intro').innerHTML = "Je bent ik een kerker aangekomen, versla de draak om naar het volgende Level te gaan. Selecteer het juiste wapen.";
  document.getElementById('button-1').innerHTML = "pijl en boog ";
  document.getElementById('button-2').innerHTML = "zwaard";
  document.getElementById('button-3').innerHTML = "Keer Terug";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "block";
    document.getElementById('Win').pause();
  document.getElementById('Lose').pause();
     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(dungeon.jpg)";
    body.style.backgroundSize = 'cover';
     document.getElementById('button-1').onclick = function(){
  if (draak){
    Level5();
  }
  else{
   alert("Je hebt het juist wapen gekozen. klik op de draak om hem te verslaan.");
   }
    document.getElementById('draak').onclick = function(){
     document.getElementById('draak').style.display = "none";
   document.getElementById('button-1').innerHTML = "klik hier om naar Level 5 te gaan.";
    draak = true;
    }
   }
 }

 function Level5(){
  document.getElementById('button-3').onclick = Level6;
  document.getElementById('button-2').style.display = "none";
  document.getElementById('button-3').style.display = "inline";
  document.getElementById('title').innerHTML = "Level 5";
  document.getElementById('intro').innerHTML = "";
  document.getElementById('button-1').innerHTML = "Ga de kamer in op de eerste trap.";
  document.getElementById('button-3').innerHTML = "Ga de kamer in op de tweede trap.";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "none";
   document.getElementById('Win').pause();
   document.getElementById('Lose').pause();
     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(kasteeltrap.jpg)";
    body.style.backgroundSize = 'cover';
 }

 

 function Level6(){
  document.getElementById('button-2').onclick = Level7;
  document.getElementById('button-1').style.display = "inline";
  document.getElementById('button-3').style.display = "inline";
    document.getElementById('button-2').style.display = "inline";
  document.getElementById('button-3').onclick = die;
  document.getElementById('button-1').onclick = die;
  document.getElementById('title').innerHTML = "Level 6";
  document.getElementById('intro').innerHTML = "je bent in een slaapkamer van beland ";
  document.getElementById('button-1').innerHTML = "Ga slapen in het bed, omdat je zo'n lange dag achter je rug heb gehad.";
  document.getElementById('button-2').innerHTML = "";
  document.getElementById('button-3').innerHTML = "Zoek naar aanwijzingen in de kamer. ";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "none";
  document.getElementById('Win').pause();
  document.getElementById('Lose').pause();
     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(bedroom.jpg)";
    body.style.backgroundSize = 'cover';
 }

 function Level7(){
  document.getElementById('button-1').onclick = Level8;
  document.getElementById('button-2').onclick = die;
  document.getElementById('button-3').onclick = die;
  document.getElementById('title').innerHTML = "Level7";
  document.getElementById('intro').innerHTML = "je bent in een slaapkamer van beland ";
  document.getElementById('button-1').innerHTML = "Juiste";
  document.getElementById('button-2').innerHTML = "";
  document.getElementById('button-3').innerHTML = "";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "none";
  document.getElementById('Win').pause();
  document.getElementById('Lose').pause();
   document.getElementById('button-1').style.display = "inline";
   document.getElementById('button-3').style.display = "inline";
     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(bedroom.jpg)";
    body.style.backgroundSize = 'cover';
 }

 function Level8(){
  document.getElementById('button-2').onclick = win;
  document.getElementById('button-3').onclick = die;
  document.getElementById('button-1').onclick = die;
  document.getElementById('title').innerHTML = "Level 8";
  document.getElementById('intro').innerHTML = "je bent in een slaapkamer van beland ";
  document.getElementById('button-1').innerHTML = "";
  document.getElementById('button-2').innerHTML = "";
  document.getElementById('button-3').innerHTML = "";
  document.getElementById('key').style.display = "none";
   document.getElementById('draak').style.display = "none";
  document.getElementById('Win').pause();
  document.getElementById('Lose').pause();
   document.getElementById('button-1').style.display = "inline";
  document.getElementById('button-3').style.display = "inline";
     var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(princess.jpg)";
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition= "center";
 }

 function die(){
  document.getElementById('title').innerHTML = "death";
  document.getElementById('intro').innerHTML = "Je hebt de verkeerde keuze gemaakt!";
  document.getElementById('button-1').innerHTML = "";
  document.getElementById('button-2').innerHTML = "refresh de pagina om het nog een keer te proberen";
  document.getElementById('button-3').innerHTML = "";
  document.getElementById('key').style.display = "none";
  document.getElementById('button-1').style.display = "none";
  document.getElementById('button-3').style.display = "none";
  document.getElementById('draak').style.display = "none";
  document.getElementById('Win').pause();
  document.getElementById('Lose').load();
  document.getElementById('theme').pause();
  var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(GameOver.jpg)";
    body.style.backgroundSize = 'cover'; 

 }
 
function win(){
  document.getElementById('title').innerHTML = "Win";
  document.getElementById('intro').innerHTML = "Het is u Gelukt ";
  document.getElementById('button-1').innerHTML = "";
  document.getElementById('button-2').innerHTML = "refresh de pagina om nog een keer te spelen.";
  document.getElementById('button-3').innerHTML = "";
  document.getElementById('key').style.display = "none";
  document.getElementById('button-1').style.display = "none";
  document.getElementById('button-3').style.display = "none";
  document.getElementById('draak').style.display = "none";
  document.getElementById('Win').load();
  document.getElementById('Lose').pause();
  document.getElementById('theme').pause();
  var body = document.getElementsByTagName('body')[0];
    body.style.background = "url(win.jpg)";
    body.style.backgroundSize = 'cover'; 
}	
