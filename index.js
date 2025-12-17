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