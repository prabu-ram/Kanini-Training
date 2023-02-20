// BULLS AND COWS
target=''
guess=''

scores = []
var score = {
    cows: 0,
    bulls: 0,
    word: ''
}

 function assignWords(){
    s = Object.create(scores)
    guess = document.getElementById("guess_word").value
    target = document.getElementById("target_word").value
    // console.log(target) 
    bulls_cows = checkWord(target, guess)
    s.bulls =  bulls_cows[0]
    s.cows = bulls_cows[1]
    s.word = guess
    scores.push(s)
    console.log(scores)
    if (s.cows == 4){
        alert("YOU WON!")
    }
    data=''
    for (var i=0; i<scores.length; i++){
        data = data + scores[i].word + ":   cows:" + scores[i].cows + "     bulls:" + scores[i].bulls + "<br>"
        var disp = document.getElementById("display")
        disp.innerHTML = data
    }

}


function checkWord(target, guess){
    cows = 0;
    bulls = 0;
    
    for (var i = 0; i < target.length; i++) {
        if (target[i] === guess[i]) {
        cows++;
        } 
        else if (target.includes(guess[i])) {
        bulls++;
        }
    }
    
    return [bulls, cows];
    

}