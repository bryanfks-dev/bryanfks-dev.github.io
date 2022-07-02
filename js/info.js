// Set left margin for main section
// Get elements
let section = document.querySelector("Section");
let video = document.querySelector("#video");
let components = document.querySelector(".components");

// Define set section's left margin function
function setLeftMargin() {
    section.style.marginLeft = nav.getBoundingClientRect().width + "px";
}

// Print content to main section
// Get elements
let container = document.querySelector("#content");
let container0 = document.querySelector("#content0");
let container1 = document.querySelector("#content1");

// Declare pointer and typing deceleration (timeout)
let i = 0;
let j = 0;
let k = 0;
const decelaration = 20;

// Set contents
const content = "This is a website that I created and developed myself. This website is full of descriptions about me, but (maybe) in the future I will add other things too. This website is the upgraded version of my old website. At first, I have never thought about making this website, but in the 12th grade, there was an English assignment where I should make a S.M.A.R.T goal, so at that time I decided to make this website (somehow). You can watch how I made the original website down below.";
const content0 = "If you are curious about how to make a website, there are plenty of tutorials about website development that you can find online (Google, Youtube, Sololearn, Code Academy, etc.). Anyways, this website was made with these components.";
const content1 = "If you are searching for a reference for your website, you can check my HTML, CSS, and Javascript code from my Github respository embed below. Keep in mind this is ONLY for a REFERENCE, don't copy these entirely, because you can develop it further than I did.";

// Define typing function
function typeWritter1() {
    container1.style.opacity = "1";
    if (k < content1.length){
        // Add every char one by one from content into container innerHTML
        container1.textContent += content1.charAt(k);
        // Add 1 k value
        k++;

        // Check if typing is done
        if (k === content1.length) {
            // Make pointer as node element
            const pointer = document.createElement("div");
            pointer.classList.add("pointer");

            // Append pointer into container
            container1.appendChild(pointer);

            // Set github card's visibility to visible
            document.querySelector("#ghcard-bryanfks-dev-1").style.visibility = "visible";
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter1, decelaration);
    }
}

function typeWritter0() {
    container0.style.opacity = "1";
    if (j < content0.length){
        // Add every char one by one from content into container innerHTML
        container0.textContent += content0.charAt(j);
        // Add 1 j value
        j++;

        // Check if typing is done
        if (j === content0.length) {
            // Set coponents' visibility to visible
            components.style.visibility = "visible";

            // Run typeWritter1 function
            typeWritter1();
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter0, decelaration);
    }
}

function typeWritter() {
    if (i < content.length){
        // Add every char one by one from content into container innerHTML
        container.textContent += content.charAt(i);
        // Add 1 i value
        i++;

        // Check if typing is done
        if (i === content.length) {
            // Change video's visibility to visible
            video.style.visibility = "visible";

            // Run typeWritter0 function 
            typeWritter0();
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter, decelaration);
    }
}
