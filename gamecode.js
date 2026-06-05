document.addEventListener("DOMContentLoaded", () => {
    // Run the initial prompt when the page loads
    let userInput = window.prompt("Please Enter your Name");
    
    // Fallback just in case the user clicks "Cancel" or leaves it blank
    if (!userInput || userInput.trim() === "") {
        userInput = "PLAYER";
    }
    
    document.querySelector(".username").innerText = userInput.toUpperCase();
    gamestart();
});

function gamestart() {
    const options = document.querySelectorAll(".image");
    
    options.forEach((option) => {
        option.addEventListener("click", function() {
            const userchoice = this.alt;
            const choices = ['rock', 'paper', 'scissors'];
            const compchoice = choices[Math.floor(Math.random() * choices.length)];
            
            winner(userchoice, compchoice);
        });
    });
}

function winner(userchoice, compchoice) {
    const result = document.querySelector(".result");
    
    // Update the UI with choices
    document.querySelector(".comp").innerText = compchoice;
    document.querySelector(".user").innerText = userchoice;

    // Determine Winner
    if (userchoice === compchoice) {
        result.textContent = "It's a Tie!";
        result.style.color = "#555";
    } else if (
        (userchoice === 'rock' && compchoice === 'scissors') ||
        (userchoice === 'paper' && compchoice === 'rock') ||
        (userchoice === 'scissors' && compchoice === 'paper')
    ) {
        result.textContent = 'You Win!';
        result.style.color = "#28a745"; // Green for win
    } else {
        result.textContent = 'You Lose!';
        result.style.color = "#dc3545"; // Red for lose
    }

    // Show the Play Again button
    const reloadBtn = document.querySelector('.reload');
    reloadBtn.style.display = 'block';
    
    // Remove old event listeners to prevent multiple triggers if clicked multiple times
    reloadBtn.replaceWith(reloadBtn.cloneNode(true));
    const newReloadBtn = document.querySelector('.reload');

    // Soft reset (No page reload)
    newReloadBtn.addEventListener('click', () => {
        document.querySelector(".comp").innerText = "-";
        document.querySelector(".user").innerText = "-";
        result.textContent = "";
        newReloadBtn.style.display = 'none';
    });
}
