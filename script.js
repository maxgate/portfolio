document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");
});

document.addEventListener("DOMContentLoaded", () => {
    function updateTimeAndDay() {
        const currentTimeUTCElement = document.getElementById("currentTimeUTC");
        const currentDayElement = document.getElementById("currentDay");

        const now = new Date();
        const utcTimeString = now.toUTCString().split(" ")[4]; // Get time in HH:MM:SS format
        const dayOfWeek = now.toLocaleString("en-US", { weekday: 'long' });

        currentTimeUTCElement.textContent = `Current Time in UTC: ${utcTimeString}`;
        currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});