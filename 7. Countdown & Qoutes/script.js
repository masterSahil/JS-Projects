// Display Popup
document.getElementById("modal").style.display = "none";
closePopup = () => {
    document.getElementById("modal").style.display = "none";
}

setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 5000);

// Slides
const qoutes = [
    " 1. Push yourself, because no one else is going to do it for you.",
    " 2. The harder you work for something, the greater you’ll feel when you achieve it.",
    " 3. Success is not final, failure is not fatal: It is the courage to continue that counts.",
    " 4. Don’t watch the clock; do what it does. Keep going.",
    " 5. Great things never come from comfort zones.",
];

let i = 0;
document.querySelector("#qoute-para").innerHTML = qoutes[i];

autoSlideQoutes = () => {
    if (i < qoutes.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.querySelector("#qoute-para").innerHTML = qoutes[i];
};

setInterval(() => {
    autoSlideQoutes();
}, 4000);

next = () => {
    if (i < qoutes.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.querySelector("#qoute-para").innerHTML = qoutes[i];
};

prev = () => {
    if (i > 0) {
        i--;
    } else {
        i = qoutes.length - 1;
    }
    document.querySelector("#qoute-para").innerHTML = qoutes[i];
};

// Countdown Logic
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
let countdownInterval;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 Happy New Year!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown() {
    if (!countdownInterval) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

function stopCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}