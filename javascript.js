

var playing = false;
var trials = 3;
var score = 0;
var fruitsDeployed = 0;
var fruitsHovered = 0;
var fruitsMissed = 0;
var fruitFileName = ["fruits/banana.png", "fruits/grapes.png", "fruits/mango.png", "fruits/pear.png", "fruits/cherry.png", "fruits/peach.png"]

$(function(){
        $.fn.generateFruit = function(delayTime){

                $("#image").hover(function(){
                   $(this).hide("explode");
                    score = score + 0.5;
                    $("#scoreValue").text(score);
                    $("#scoreFinalValue").text(score);
                    fruitsHovered = score ;

                });
                
                $("#playArea").prepend("<span id='fruit' style='display: none; top: -80px; position: absolute;'></span>").delay(delayTime);
                $("#fruit").css("left", 80*Math.round(6*Math.random())).prepend("<img id='image' height='80px' src="+fruitFileName[Math.round(5*Math.random())]+">").show().delay(delayTime);
        
                $("#fruit").animate({
                            top: "+430px",
                    }, 1000,function(){
                        fruitsDeployed += 1;
                        fruitsMissed = fruitsDeployed - fruitsHovered;
                        if(fruitsMissed<=2){
                            trials -= fruitsMissed;
                            $("#trials").text("Misses: "+(fruitsMissed+1))
                        }else{
                            $("#playArea").empty();
                            $("#gameOver").show();
                        }
                                })

    };
    
    $.fn.startGame = function(){
        for(var i=0; i<=200000; i=i+500){
                    $.fn.generateFruit(i);
        }
          
    }
    
    $("#startReset").click(function(){
        if(playing == true){
            window.location.reload();        
        }else{
            $("#score").show();
            $("#trials").show();
            $("#startReset").text("Reset Game");
            $("#scoreValue").text(score)
            $.fn.startGame();
            playing = true;
        };
    });
    
      
});

