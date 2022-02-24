var i=-1;
var j=0;
var level=0;
//pattern of colours clicked by use
var userClickedPattern = [];
//pattern of game predefined
var gamePattern = [];
//set of colours
do
{
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour);
  level++;
}
nextSequence();
userClickedPattern.length=0;
for(j=1;j<=level;j++)
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);

// fot delayed animation

  $("#"+userChosenColour).addClass("pressed");
  setTimeout(function() {
    $("#"+userChosenColour).removeClass("pressed");
}, 200);
checkAnswer(userChosenColour);
});

// function to blink the button according to random number
i++;
}while(userClickedPattern[i]===gamePattern[i]);


// function to play sound

function playsound(randomChosenColour) {
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
function checkAnswer(currentLevel){
  if(userChosenColour===randomChosenColor)
  console.log("correct");
  else
  console.log("wrong");
}
