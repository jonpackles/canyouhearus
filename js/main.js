$(".hamburger-container").click(function(){
  $(".blueBox").toggleClass("blueBoxOpen");

  $(".explainer").toggleClass("explainerOpen");
})




var megaMenu = document.getElementById("overlay"); //grabs the overlay
var ham_layers = document.getElementsByClassName("ham-layer"); //creates an array of objects that have the class name "ham_layer"
var toggle = false; //creates two states to keep track of when the hamburger menu is clicked.

function toggleHamMenu(){

  if (toggle == false){ //default state
    document.getElementById("top_bun").style.top = "11px";
    document.getElementById("top_bun").style.transform = "rotate(45deg)";
    document.getElementById("meat").style.opacity = "0";
    document.getElementById("bottom_bun").style.top = "-11px";
    document.getElementById("bottom_bun").style.transform = "rotate(-45deg)";


    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to white.
    for (var i = 0; i < ham_layers.length; i++){
      ham_layers[i].style.backgroundColor = "white";
    }

    toggle = true;
    megaMenu.style.height = "100vw";

  }else{
    //rotates and positions each layer of the hamburger. The "meat" layer reappears too.
    document.getElementById("top_bun").style.transform = "rotate(0deg)";
    document.getElementById("top_bun").style.top = "-0.05px";
    document.getElementById("meat").style.opacity = "100";
    document.getElementById("bottom_bun").style.transform = "rotate(0deg)";
    document.getElementById("bottom_bun").style.top = "0.05px";

    //loops through all element's with the class of "ham-layer" (top bun, meat, bottom bun) and changes their background color to "grey".
   

    toggle = false;
    megaMenu.style.height = "0vh"; //gives a height of 0 view height, so the user can't see it
  }
}

$



// var acousticGuitar = new Pizzicato.Sound('./audio/acoustic.wav', function() {
//     // Sound loaded!
//     acousticGuitar.play();
// });




// BEGIN P5

var recorder, soundFile, peaks, duration;
var state = 'INIT';

var soundOne, soundTwo, soundThree, soundFour, soundFive, soundSix, soundSeven, soundEight, ampOne, ampTwo, ampThree;

var redValue, greenValue, blueValue;

var oneClicked = false;
var twoClicked = false;
var threeClicked = false;
var fourClicked = false;
var fiveClicked = false;
var sixClicked = false;
var sevenClicked = false;
var eightClicked = false;


function preload(){

  soundOne = loadSound('./audio/0.mp3')
  soundTwo = loadSound('./audio/1.mp3');
  soundThree = loadSound('./audio/2.mp3');
  soundFour = loadSound('./audio/3.mp3')
  soundFive = loadSound('./audio/4.mp3');
  soundSix = loadSound('./audio/5.mp3');
  soundSeven = loadSound('./audio/6.mp3')
  soundEight = loadSound('./audio/7.mp3');



}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pixelDensity(1);
  // frameRate(10);

  soundOne.pan(-0.8);
  soundOne.loop();
  soundTwo.pan(0.8);
  soundTwo.loop();
  soundThree.pan(0.2);
  soundThree.loop();
  soundFour.pan(-0.3);
  soundFour.loop();
  soundFive.pan(0.3);
  soundFive.loop();
  soundSix.pan(-0.9);
  soundSix.loop();
  soundSeven.setVolume(0.7);
  soundSeven.pan(0.9);
  soundSeven.loop();
  soundEight.pan(-0.3);
  soundEight.loop();

  ampOne = new p5.Amplitude();
  ampTwo = new p5.Amplitude();
  ampThree = new p5.Amplitude();
  ampFour = new p5.Amplitude();
  ampFive = new p5.Amplitude();
  ampSix = new p5.Amplitude();
  ampSeven = new p5.Amplitude();
  ampEight = new p5.Amplitude();

  ampOne.setInput(soundOne);
  ampTwo.setInput(soundTwo);
  ampThree.setInput(soundThree);
  ampFour.setInput(soundFour);
  ampFive.setInput(soundFive);
  ampSix.setInput(soundSix);
  ampSeven.setInput(soundSeven);
  ampEight.setInput(soundEight);

  redValue = 255;
  greenValue = 75;
  blueValue = 75;




}

function draw(){

  

  peaks = soundOne.getPeaks(1000);
  duration = soundOne.duration();

  drawWave();

  if (oneClicked == true){

    soundOne.setVolume(0.0);

  } else {
    soundOne.setVolume(1.0);
  }

  if (twoClicked == true){

    soundTwo.setVolume(0.0);

  } else {
    soundTwo.setVolume(1.0);
  }

  if (threeClicked == true){

    soundThree.setVolume(0.0);

  } else {
    soundThree.setVolume(1.0);
  }

  if (fourClicked == true){

    soundFour.setVolume(0.0);

  } else {
    soundFour.setVolume(1.0);
  }

  if (fiveClicked == true){

    soundFive.setVolume(0.0);

  } else {
    soundFive.setVolume(1.0);
  }

  if (sixClicked == true){

    soundSix.setVolume(0.0);

  } else {
    soundSix.setVolume(1.0);
  }
  if (sevenClicked == true){

    soundSeven.setVolume(0.0);

  } else {
    soundSeven.setVolume(0.7);
  }
  if (eightClicked == true){

    soundEight.setVolume(0.0);


  } else {
    soundEight.setVolume(1.0);
  }

 
 


}

function drawWave(){

  var volOne = ampOne.getLevel();
  var volTwo = ampTwo.getLevel();
  var volThree = ampThree.getLevel();
  var volFour = ampFour.getLevel();
  var volFive = ampFive.getLevel();
  var volSix = ampSix.getLevel();
  var volSeven = ampSeven.getLevel();
  var volEight = ampEight.getLevel();

  background(255);



  fill(redValue, greenValue, greenValue);
  noStroke();
  rectMode(CENTER);


  rect(windowWidth * .5, 30, windowWidth, 2 + volOne * 200);

  rect(windowWidth * .5, 130, windowWidth, 2 + volTwo * 200);

  rect(windowWidth * .5, 230, windowWidth, 2 + volThree * 200);

  rect(windowWidth * .5, 330, windowWidth, 2 + volFour * 200);

  rect(windowWidth * .5, 430, windowWidth, 2 + volFive * 200);

  rect(windowWidth * .5, 530, windowWidth, 2 + volSix * 200);

  rect(windowWidth * .5, 630, windowWidth, 2 + volSeven * 200);

  rect(windowWidth * .5, 730, windowWidth, 2 + volEight * 200);

  // rect(windowWidth * .5, 330, windowWidth,  10 +vol* 110);

  // rect(windowWidth * .5, 430, windowWidth, 10 +vol* 110);

  // rect(windowWidth * .5, 530, windowWidth, 10 + vol* 110);
  // rect(windowWidth * .5, 630, windowWidth, 10 + vol* 110);
  // rect(windowWidth * .5, 730, windowWidth, 10 + vol* 110);
  // rect(windowWidth * .5, 830, windowWidth, 10 + vol* 110);


}



function mouseClicked() {

    vol = 0;

  // if (redValue === 255) {
  //   redValue = 150;
  //   console.log("test");
  // } else {
  //   redValue = 255;
  // }

  //  if (greenValue === 75) {
  //   greenValue = 150;
  // } else {
  //   greenValue = 75;
  // }


  if (mouseY <= 80 && mouseX > 50) {

    if(oneClicked == false){

      oneClicked = true;

    } else {
      oneClicked = false;
    }
    
  }

  if ((mouseY > 90) && (mouseY <= 170)) {

    if(twoClicked == false){

      twoClicked = true;

    } else {
      twoClicked = false;
    }
    
  }

  if ((mouseY > 180) && (mouseY <= 260)) {

    if(threeClicked == false){

      threeClicked = true;

    } else {
      threeClicked = false;
    }
    
  }

  if ((mouseY > 280) && (mouseY <= 360)) {

    if(fourClicked == false){

      fourClicked = true;

    } else {
      fourClicked = false;
    }
    
  }

  if ((mouseY > 380) && (mouseY <= 460)) {

    if(fiveClicked == false){

      fiveClicked = true;

    } else {
      fiveClicked = false;
    }
    
  }

  if ((mouseY > 480) && (mouseY <= 560)) {

    if(sixClicked == false){

      sixClicked = true;

    } else {
      sixClicked = false;
    }
    
  }

  if ((mouseY > 580) && (mouseY <= 660)) {

    if(sevenClicked == false){

      sevenClicked = true;

    } else {
      sevenClicked = false;
    }
    
  }

  if ((mouseY > 680) && (mouseY <= 760)) {

    if(eightClicked == false){

      eightClicked = true;

    } else {
      eightClicked = false;
    }
    
  }






}






