let homeScore = 0;
let guestScore = 0;

let homeScoreParagraph = document.getElementById("home-score");
let guestScoreParagraph = document.getElementById("guest-score");

function addPoints(scoreTeam, points) {

 if (scoreTeam === "homeScore") {
    homeScore += points;
 } else if (scoreTeam === "guestScore") {
    guestScore += points;
 } else {
    console.log("Invalid team");
 }
 
 homeScoreParagraph.textContent = homeScore;
 guestScoreParagraph.textContent = guestScore;

}

// add new game button (reset scores)
function newGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreParagraph.textContent = homeScore;
    guestScoreParagraph.textContent = guestScore;
}

// highlight team with higher score

// add a few more counters 
// period, fouls, timer














