# 🎮 Sandeli's Gaming Zone: Rock Paper Scissors

A fun, interactive, and modern take on the classic **Rock, Paper, Scissors** game built entirely with vanilla web technologies. Play against the computer, track your results, and enjoy smooth hover animations!

![Gameplay Screenshot](./image_c3bdc4.png)

---

## ✨ Features

*   **Custom Player Name:** The game opens with a prompt, allowing you to personalize the scoreboard with your own name.
*   **Interactive UI:** Features a clean, responsive layout built with CSS Flexbox, including smooth scaling hover animations on the choice images.
*   **Dynamic Scoreboard:** Instantly updates the screen to show your choice, the computer's randomized choice, and the final match result (Win, Lose, or Tie).
*   **Soft Reset:** The "Play Again" button smoothly clears the board for the next round without requiring a clunky full-page refresh.
*   **Custom Typography:** Implements the "Special Elite" Google Font for a distinct, retro typewriter aesthetic.

---

## 🛠️ Technologies Used

*   **HTML5:** Semantic structure and layout.
*   **CSS3:** Flexbox for alignment, custom variables for theming, and CSS transitions for interactive button effects.
*   **JavaScript (Vanilla):** DOM manipulation, event listeners, and randomized logic for the computer's turns.

---

## 🚀 How to Play (Local Installation)

This is a completely static web application, meaning no servers, package managers, or build tools are required to run it!

1.  **Clone the repository:**
```bash
    git clone [https://github.com/your-username/rps-game.git](https://github.com/your-username/rps-game.git)
    ```
    *(Alternatively, you can download the project as a `.zip` file and extract it).*

2.  **Navigate to the project folder:**
```bash
    cd rps-game
    ```

3.  **Run the game:**
    Simply double-click the `index.html` file to open it in your default web browser.

---

## 📁 Project Structure

```text
📦 rps-game
 ┣ 📜 index.html               # Main game interface
 ┣ 📜 style.css                # Styling, flexbox layout, and animations
 ┣ 📜 gamecode.js              # Game logic and DOM interaction
 ┣ 🖼️ rock-modified.png        # Rock button asset
 ┣ 🖼️ paper-modified.png       # Paper button asset
 ┗ 🖼️ scissorssss-modified.png # Scissors button asset
