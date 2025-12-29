buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
var john = userClickedPattern = [];

var level = 0;
var bestscore = level

function nextSequence() {
    

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  scorekeeper();
  level++;
  $("#level-title").text("Level " + level);

}
 function scorekeeper(){
if (level > 0){
  $(".score").text("Best score:" + level)}
  else if (level === 0){
    $(".score").text("Best score:" + bestscore)
  }
 }

function playSound(name) { 
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}







$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    
    
    userClickedPattern.push(userChosenColour);
    

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userChosenColour)
});

function animatePress(currentcolour) {
  $("#" + currentcolour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentcolour).removeClass("pressed");
  }, 100);
}

$(document).ready(function() {
  let keyPressed = false; // Flag to track if a key is currently being pressed

  $(document).on('keydown', function(event) {
    if (!keyPressed) {
      // This block will execute only on the first keydown for a given key
      nextSequence();
      
      // Add your desired logic here for the first keydown
      keyPressed = true; // Set the flag to true to prevent repeated execution
    }
  });

  $(document).on('keyup', function() {
    // When the key is released, reset the flag
    keyPressed = true;
  });
});


function checkAnswer(currentLevel){


    if(userClickedPattern.length === gamePattern.length){
      if(currentLevel === gamePattern[gamePattern.length-1] ){
      areArraysAligned(userClickedPattern, gamePattern)
    } else if(currentLevel !== gamePattern[gamePattern.length-1]){
      startover();}
} 
}





















function areArraysAligned(arr1, arr2) {
  // First, check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check each element position by position
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      startover(); // if any element differs, stop and return false
    }
  

  // If all elements match in order
   return setTimeout(function(){
      
       nextSequence()
       userClickedPattern.splice(0, userClickedPattern.length)
    },1000);;
  }
}













































































function startover(){
  bestscore = level - 1
  $("#level-title").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      var audio = new Audio("sounds/wrong.mp3");
       audio.play();
       userClickedPattern.splice(0, userClickedPattern.length);
       gamePattern.splice(0, gamePattern.length);
       level = 0;
       setTimeout(function() {
        $("body").removeClass("game-over");
       },200);
       resetkey();
}



function resetkey(){
  $(document).ready(function() {
  let keyPressed = false; // Flag to track if a key is currently being pressed

  $(document).on('keydown', function(event) {
    if (!keyPressed) {
      // This block will execute only on the first keydown for a given key
      nextSequence();
      
      // Add your desired logic here for the first keydown
      keyPressed = true; // Set the flag to true to prevent repeated execution
    }
  });

  $(document).on('keyup', function() {
    // When the key is released, reset the flag
    keyPressed = true;
  });
});
}























































































/*if(userClickedPattern.length === gamePattern.length){
       for (let i = 0; i < userClickedPattern.length; i++) {
    // If any elements at the same position are not equal, return false.
      if (userClickedPattern[i] !== gamePattern[i]) {
      $("#level-title").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      var audio = new Audio("sounds/wrong.mp3");
       audio.play();
       setTimeout(function() {
        $("body").removeClass("game-over");
       },200);
    }
    
    else {
    setTimeout(function(){
      
       nextSequence()
       userClickedPattern.splice(0, userClickedPattern.length)
    },1000);

  }
    }
  }*/