document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.querySelector(".yes-btn");
    const noButton = document.querySelector(".no-btn");

    let speedMultiplier = 1.2;

    
    document.addEventListener("mousemove", (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let btnRect = yesButton.getBoundingClientRect();

        let btnX = btnRect.left + btnRect.width / 2;
        let btnY = btnRect.top + btnRect.height / 2;

        let distance = Math.sqrt((x - btnX) ** 2 + (y - btnY) ** 2);

        if (distance < 150) { 
            let moveX = (Math.random() - 0.5) * 400 * speedMultiplier;
            let moveY = (Math.random() - 0.5) * 400 * speedMultiplier;

            // Keep button inside the screen bounds
            let maxX = window.innerWidth - btnRect.width;
            let maxY = window.innerHeight - btnRect.height;

            let newLeft = Math.min(Math.max(btnRect.left + moveX, 0), maxX);
            let newTop = Math.min(Math.max(btnRect.top + moveY, 0), maxY);

            yesButton.style.position = "absolute";
            yesButton.style.left = `${newLeft}px`;
            yesButton.style.top = `${newTop}px`;
            yesButton.style.transition = "transform 0.1s ease-out";
            yesButton.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(${Math.random() * 360}deg)`;

            speedMultiplier += 0.2; 
        }
    });

    // "No" Button Click Event - SADDEST PAGE EVER
    noButton.addEventListener("click", () => {
        document.body.innerHTML = `
            <div class="sad-container">
                <h1>💔 You really said NO? 💔</h1>
                <p>Now I'm alone forever... 😭</p>
                <img src="depositphotos_243421478-stock-photo-cropped-view-female-hand-paper.jpg" alt="Sad GIF">
                <div class="crying-emojis">😭😭😭😭😭</div>
                <p class="moving-text">I thought we had something special... 💔</p>
                <audio autoplay loop>
                    <source src="song.mp3" type="audio/mpeg">
                </audio>
            </div>
        `;

        // Apply Lonely Dark Theme
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "white";
        document.body.style.textAlign = "center";
        document.body.style.fontSize = "1rem";
        document.body.style.height = "100vh";
        document.body.style.display = "flex";
        document.body.style.flexDirection = "column";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";

        // Rain Effect 🌧️
        let rainEffect = document.createElement("div");
        rainEffect.classList.add("rain");
        document.body.appendChild(rainEffect);
        for (let i = 0; i < 30; i++) {
            let drop = document.createElement("div");
            drop.classList.add("raindrop");
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            rainEffect.appendChild(drop);
        }

        // Moving Text Effect
        let movingText = document.querySelector(".moving-text");
        let direction = 1;
        setInterval(() => {
            movingText.style.transform = `translateX(${direction * 20}px)`;
            direction *= -1;
        }, 1000);
    });
});
