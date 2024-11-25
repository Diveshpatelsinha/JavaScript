const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
    const now = new Date();

    // Get current time
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the degree rotations for each hand
    const secondDegrees = (seconds / 60) * 360; // Second hand rotates every 60 seconds
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6; // Minute hand includes seconds
    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // Hour hand includes minutes

    // Apply the rotations to the clock hands
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initialize the clock immediately
