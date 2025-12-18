// Score
let homeScore = 0;
let guestScore = 0;

let homeScoreParagraph = document.getElementById('home-score');
let guestScoreParagraph = document.getElementById('guest-score');

// add points
function addPoints(scoreTeam, points) {
    if (scoreTeam === 'homeScore') {
        homeScore += points;
    } else if (scoreTeam === 'guestScore') {
        guestScore += points;
    } else {
        console.log('Invalid team');
    }

    homeScoreParagraph.textContent = homeScore;
    guestScoreParagraph.textContent = guestScore;

    winningTeam();
}

// add new game button (reset scores)
function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreParagraph.textContent = homeScore;
    guestScoreParagraph.textContent = guestScore;
    homeScoreParagraph.classList.remove('winning');
    guestScoreParagraph.classList.remove('winning');
}

// highlight team with higher score

function winningTeam() {
    let winningTeam = homeScore > guestScore ? 'home' : homeScore === guestScore ? 'draw' : 'guest';

    if (winningTeam === 'home') {
        guestScoreParagraph.classList.remove('winning');
        homeScoreParagraph.classList.add('winning');
    } else if (winningTeam === 'guest') {
        homeScoreParagraph.classList.remove('winning');
        guestScoreParagraph.classList.add('winning');
    } else {
        homeScoreParagraph.classList.add('winning');
        guestScoreParagraph.classList.add('winning');
    }
}
