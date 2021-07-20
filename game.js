
var buttonColors = ["red" , "yellow" , "blue" , "green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;
var started = false;


$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence(){

var randomNumber = Math.floor(Math.random()*4);

var randomChosenColour = $(buttonColors)[randomNumber];

gamePattern.push(randomChosenColour);

$("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
level ++;
$("#level-title").text("Level " + level);
playSound(randomChosenColour);
userClickedPattern = [];
}


// user input

$(document).click("button" , function(event){
  var userChosenColour = event.target.id;
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  var lastIndex = userClickedPattern.length - 1;
  animatePress(userChosenColour);
  ansChecker(lastIndex);
})

function playSound(name){
  var soundEffect = new Audio ("sounds/" + name +".mp3");
  soundEffect.play();
}

function animatePress(currentColour){
  // console.log(currentColour);
  $("#" + currentColour).addClass("pressed");
 setTimeout(() => { $("#" + currentColour).removeClass("pressed"); }, 100);
}


function ansChecker(currentLevel){

if ( gamePattern[currentLevel] == userClickedPattern [currentLevel]) {
  console.log("correct");

        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }

} else {
  console.log("GALATTTTTT");
  console.log(currentLevel);
  var wrong = "wrong";
  playSound(wrong);
  // $("body").css.addClass = game-over;
  $("body").addClass("game-over");
 setTimeout(() => { $("body").removeClass("game-over"); }, 200);
    $("#level-title").text("Game Over, press any key restart");
    startOver();
}

}


function startOver(){
  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
level = 0;
gamePattern = [];
started = false;

};
