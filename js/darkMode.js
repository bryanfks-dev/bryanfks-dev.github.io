// Get elements
const toggle = document.querySelector("#toggle");
let mode = document.querySelector("#mode");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const h1 = document.querySelector("h1");
const line = document.querySelector("#line");

// Get key(s) from browser local storage
let darkMode = localStorage.getItem('dark');

// Get key(s) from browser session storage
let session = sessionStorage.getItem('mode');

// Define dark mode functions
const enableDarkMode = () => {
    
    // Create item
    localStorage.setItem('dark', "enabled");

    // Change the icon from moon into sun
    mode.className =  mode.className.replace("bxs-moon", "bxs-sun");

    // Add 'dark' into objects' class name
    body.classList.add('dark');
    nav.classList.add('dark');
    ul.classList.add('dark');
    toggle.classList.add('dark');
    h1.classList.add('dark');
    line.classList.add('dark');

    // Dispatch "storage" event
    window.dispatchEvent(new Event('storage'));
}

const disableDarkMode = () => {
    // Create item
    localStorage.setItem('dark', 'disabled');

    // Change the icon from moon into sun
    mode.className =  mode.className.replace("bxs-sun", "bxs-moon");

    // Remove 'dark' in objets' class name
    body.classList.remove('dark');
    nav.classList.remove('dark');
    ul.classList.remove('dark');
    toggle.classList.remove('dark');
    h1.classList.remove('dark');
    line.classList.remove('dark');

    // Dispatch "storage" event
    window.dispatchEvent(new Event('storage'));
}

// Check if darkMode is enabled from localstorage or dark mode in device is enabled or night time or midnight time
if (darkMode === "enabled" || window.matchMedia('(prefers-color-scheme: dark)').matches || new Date().getHours() >= new Date(0, 0, 0, 19).getHours() || new Date().getHours() <= new Date(0, 0, 0,6).getHours()) {
    // Enable dark mode design
    enableDarkMode();
}

// Check if session is exist
if (session != null) {
    if (session === 'dark') {
        // Enable dark mode design
        enableDarkMode();
    }
    else {
        // Disable dark mode design
        disableDarkMode();
    }
}

// Event listener for object(s)
toggle.addEventListener("click", () => {
    if (localStorage.getItem('dark') != "enabled"){
        // Check if dark mode in device is enabled or night time or midnight time
        if (window.matchMedia('(prefers-color-scheme: dark)').matches || new Date().getHours() >= new Date(0, 0, 0, 19).getHours() || new Date().getHours() <= new Date(0, 0, 0,6).getHours()) {
            // Create session
            sessionStorage.setItem('mode', 'dark');
        }

        // Enable dark mode design
        enableDarkMode();
    }
    else {
        // Check if dark mode in device is enabled or night time or midnight time
        if (window.matchMedia('(prefers-color-scheme: dark)').matches || new Date().getHours() >= new Date(0, 0, 0, 19).getHours() || new Date().getHours() <= new Date(0, 0, 0,6).getHours()) {
            // Create session
            sessionStorage.setItem('mode', 'light');
        }

        // Disable dark mode design
        disableDarkMode();
    }
});

// Event listener for session storage
window.addEventListener("beforeunload", () => {
    // Remove 'mode' from session storage
    sessionStorage.removeItem('mode');
});