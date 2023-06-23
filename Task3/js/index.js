// loader js
var preloader=document.getElementById('loading');
    window.addEventListener("load", function(){
        preloader.style.display="none";
    });   
 

//Alert Timer
const now = new Date();
let countdownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0); // Set the countdown time to 05:00:00
if (now.getHours() >= 5) {
    countdownDate.setDate(countdownDate.getDate() + 1); // If current time is past 05:00:00, move countdown to the next day
}

// Update the countdown every second
const countdownTimer = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate.getTime() - now;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML =
        "Ends In " +
        formatTime(hours) +
        "h " +
        formatTime(minutes) +
        "m " +
        formatTime(seconds) +
        "s.";

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Countdown has ended!";
    }
}, 1000); // Update every second

// Helper function to format time with leading zeros
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}