var buttons = document.getElementsByTagName('button');
var imgUser = document.getElementById('img-user');
var imgComputer = document.getElementById('img-computer');
var userChoice;
var computerChoice;
var labelUser = document.getElementById('score-user');
var labelComputer = document.getElementById('score-computer');
var scoreUser = parseInt(labelUser.textContent);
var scoreComputer = parseInt(labelComputer.textContent);

function disableButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.display = 'none';
    }
}

function enableButtons() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.removeProperty('display');
    }

    imgUser.src = "assets/img/background.png";
    imgComputer.src = "assets/img/background.png";

    labelUser.textContent = scoreUser.toString();
    labelComputer.textContent = scoreComputer.toString();
}

function result(user, computer){
    var message;
    if(user == "rock" && computer == "scissors" ||
        user == "paper" && computer == "rock" ||
        user == "scissors" && computer == "paper")
    {
        message = "You Win!";
        scoreUser = scoreUser + 1;
    }
    else if(user == "rock" && computer == "rock" ||
        user == "paper" && computer == "paper" ||
        user == "scissors" && computer == "scissors")
    {
        message = "Draw";
    }
    else{
        message = "You Lose!";
        scoreComputer = scoreComputer + 1;
    }
    
    alert(message);
    
    enableButtons();
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        userChoice = this.id;
        imgUser.src = "assets/img/" + userChoice + ".png";
        var choices = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * 3);
        computerChoice = choices[randomIndex];
        imgComputer.src = "assets/img/" + computerChoice + ".png"; 

        disableButtons();
        setTimeout(function() {
            result(userChoice, computerChoice);
        }, 100);
    });
}