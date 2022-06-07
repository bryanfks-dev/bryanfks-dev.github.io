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

// Define dark mode functions
const enableDarkMode = () => {
    
    // Set key named "dark" and "enabled" value into local storage 
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
    window.dispatchEvent( new Event('storage') )
}

const disableDarkMode = () => {
    // Set key named "dark" and null value into local storage 
    localStorage.setItem('dark', null);

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
    window.dispatchEvent( new Event('storage') )
}

// Check if darkMode is enabled from localstorage or dark mode in device is enabled or night time or midnight time
if (darkMode === "enabled" || window.matchMedia('(prefers-color-scheme: dark)').matches || new Date().getHours() >= new Date(0, 0, 0, 19).getHours() || new Date().getHours() <= new Date(0, 0, 0, 6).getHours()) {
    // Enable dark mode design
    enableDarkMode();
}

// Event listener for object(s)
toggle.addEventListener("click", () => {
    // Return true if darkMode value in local storage is "enabled"
    if (darkMode != "enabled"){
        // Enable dark mode design
        enableDarkMode();

    }
    else {
        // Disable dark mode design
        disableDarkMode();

    }
})
