var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];

var gamePattern=[];



var started=false;
var level=0;
$(document).keypress(function(){
   if(!started){
       $("#level-title").text("Level"+level);
       nextSquence();
       started=true;
   
   }
});


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function(){
                nextSquence();
            },1000);
        }
    }
    else{
        consolel.log("wrong").
       playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game over, Press Any Key to Restart");
        startOver();
 }
}

function nextSquence(){
    userClickedPattern=[];
    level++;

    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
}
function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();

}
 function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
 }

 function startOver(){
    level=0;
    gamePattern=[];
    started=false;

 }
