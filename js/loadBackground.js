// particles.js
// Check if darkMode is enabled from localstorage
function getPath(){
    // Get today date and month
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();

    // Set target full date
    const christmas = new Date(0, 11, 25);
    const birthday = new Date(0, 11, 12); 

    // Get dark mode value from local storage
    let dark = localStorage.getItem('dark');

    // Check date
    // Christmas
    if (month === christmas.getMonth() && date === christmas.getDate()) {
        // Change --background color in :root to red
        document.documentElement.style.setProperty('--background', '#C61917');

        // Return path to snow particles
        return './json/particles-snow.json';
    }
    // Birthday
    else if (month === birthday.getMonth() && date === birthday.getDate()) {
        // Get background div
        let background = document.querySelector(".background");

        // Add bacgkround classlist name
        background.classList.add("birthday");

        // Check if dark mdoe is enabled
        if (dark === "enabled") {
            // Return path to star particles in dark mode
            return './json/particles-cat-dark.json';
        }
        else{
            // Return path to star particles
            return './json/particles-cat.json';
        }
    }
    else{
        // Check if dark mode is enabled
        if (dark === "enabled") {
            // Return path to particles in dark mode
            return './json/particles-dark.json';
        }
        else{
            // Return path to particles
            return './json/particles.json';
        }
    }
}