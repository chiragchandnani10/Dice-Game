function newone(newRandom,newRandom2){
    var s_mini = "dice"+newRandom+".png";
    var s = "images/"+s_mini;
    var s2 = "images/dice"+newRandom2+".png";
    document.querySelector(".img1").setAttribute("src",s);
    document.querySelector(".img2").setAttribute("src",s2);
}

function winner(newRandom,newRandom2){
    if(newRandom>newRandom2){
        document.querySelector("h1").textContent = "Player 1 wins";
    }
    else if(newRandom<newRandom2){
        document.querySelector("h1").textContent = "Player 2 wins";
    }
    else{
        document.querySelector("h1").textContent = "Its a draw!";
    }
}


var randomNumber = Math.random();
var newRandom = Math.floor(6*randomNumber)+1;
var newRandom2 = Math.floor(6*Math.random())+1;
newone(newRandom,newRandom2);
winner(newRandom,newRandom2);
