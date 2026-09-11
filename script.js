/* =================================
   GET HTML ELEMENTS
================================= */

const themeToggle = document.querySelector("#themeToggle");

const nameInput = document.querySelector("#nameInput");
const nameButton = document.querySelector("#nameButton");

const displayName = document.querySelector("#displayName");
const profileName = document.querySelector("#profileName");
const welcomeMessage = document.querySelector("#welcomeMessage");

const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const resetBtn = document.querySelector("#resetBtn");

const counterValue = document.querySelector("#counterValue");

const profileButton = document.querySelector("#profileButton");
const profile = document.querySelector("#profile");

const progressButton = document.querySelector("#progressButton");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");

const messageButton = document.querySelector("#messageButton");
const dynamicMessage = document.querySelector("#dynamicMessage");

const eventButton = document.querySelector("#eventButton");
const eventStatus = document.querySelector("#eventStatus");

const notification = document.querySelector("#notification");


/* =================================
   STATE
================================= */

let counter = 0;

let progress = 0;

let currentMessage = 0;


/* =================================
   NOTIFICATION FUNCTION
================================= */

function showNotification(message) {

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}


/* =================================
   DARK MODE
================================= */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    if (isDarkMode) {

        themeToggle.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

        showNotification("Dark Mode enabled");

    } else {

        themeToggle.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

        showNotification("Light Mode enabled");
    }
});


/* =================================
   LOAD SAVED THEME
================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️ Light Mode";
}


/* =================================
   UPDATE NAME
================================= */

nameButton.addEventListener("click", updateName);

nameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        updateName();
    }

});


function updateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        showNotification("Please enter your name.");

        return;
    }

    displayName.textContent = name;

    profileName.textContent = name;

    welcomeMessage.textContent =
        `Welcome ${name}! Start exploring the interactive dashboard.`;

    nameInput.value = "";

    showNotification("Name updated successfully!");
}


/* =================================
   INCREASE COUNTER
================================= */

increaseBtn.addEventListener("click", () => {

    counter++;

    updateCounter();

    showNotification("Counter increased!");
});


/* =================================
   DECREASE COUNTER
================================= */

decreaseBtn.addEventListener("click", () => {

    counter--;

    updateCounter();

    showNotification("Counter decreased!");
});


/* =================================
   RESET COUNTER
================================= */

resetBtn.addEventListener("click", () => {

    counter = 0;

    updateCounter();

    showNotification("Counter reset!");
});


/* =================================
   UPDATE COUNTER ON PAGE
================================= */

function updateCounter() {

    counterValue.textContent = counter;
}


/* =================================
   SHOW / HIDE PROFILE
================================= */

profileButton.addEventListener("click", () => {

    profile.classList.toggle("hidden");

    const isHidden =
        profile.classList.contains("hidden");

    if (isHidden) {

        profileButton.textContent = "Show Profile";

    } else {

        profileButton.textContent = "Hide Profile";

    }

});


/* =================================
   PROGRESS BAR
================================= */

progressButton.addEventListener("click", () => {

    if (progress < 100) {

        progress += 10;

        progressBar.style.width = `${progress}%`;

        progressBar.textContent = `${progress}%`;

        progressText.textContent =
            `Your progress is ${progress}%.`;

        if (progress === 100) {

            progressButton.textContent = "Completed";

            progressButton.disabled = true;

            showNotification("🎉 Learning completed!");

        } else {

            showNotification("Progress increased!");

        }

    }

});


/* =================================
   DYNAMIC MESSAGE
================================= */

const messages = [
    "Great job! Keep learning JavaScript. 🚀",
    "You are successfully manipulating the DOM! 💻",
    "Every click is an interaction. ⚡",
    "Keep practicing frontend development! 🔥",
    "You are building interactive web experiences! 🎯"
];


messageButton.addEventListener("click", () => {

    dynamicMessage.textContent =
        messages[currentMessage];

    currentMessage++;

    if (currentMessage >= messages.length) {
        currentMessage = 0;
    }

    showNotification("Message updated!");
});


/* =================================
   EVENT DEMONSTRATION
================================= */

eventButton.addEventListener("click", () => {

    const currentTime =
        new Date().toLocaleTimeString();

    eventStatus.textContent =
        `Event triggered successfully at ${currentTime}`;

    showNotification("JavaScript event detected!");
});
