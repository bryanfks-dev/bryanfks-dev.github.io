// Set left margin for main section
// Get elements
let section = document.querySelector("Section");
let socialMedia = document.querySelector("#socialMedia");

// Define set section's left margin function
function setLeftMargin() {
    section.style.marginLeft = nav.getBoundingClientRect().width + "px";
}

// Print content to main section
// Get elements
let container = document.querySelector("p");

// Declare pointer and typing deceleration (timeout)
let i = 0;
const decelaration = 20;

// Set content
const content = "You can find me on these social media platforms. So if you have some question about myself, about this web, or anything else, feel free to contact me via social media platforms down here. You can also give me your feedback via email !";

// Define typing function
function typeWritter() {
    if (i < content.length){
        // Add every char one by one from content into container innerHTML
        container.textContent += content.charAt(i);
        // Add 1 i value
        i++;

        // Check if typing is done
        if (i === content.length) {
            // Make a pointer (cursor) as node element
            const pointer = document.createElement("div");
            pointer.classList.add("pointer");

            // Append pointer into container
            container.appendChild(pointer);

            // Change socialMedia vibility to visible
            socialMedia.style.visibility = "visible";
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter, decelaration);
    }
}

// Define on i:hover function
function modifyElement(element) {
    // Get elements
    let Outerparent = element.parentElement.parentElement;
    let child = Outerparent.children[1]; 

    // Current Element
    // Add animation
    element.style.animation = "pulse 2.5s infinite";

    // Children
    // Add "active" to class name
    child.classList.add("active");

    // Check if dark mode is active by checking the body class
    if (body.classList.contains("dark")){
        // Change color
        child.style.color = "var(--primary-color)";
    }
    else {
        // Change color depends on parent color
        child.style.color = element.style.color;
    }
}

function removeModify(element) {
    // Get elements
    let Outerparent = element.parentElement.parentElement;
    let child = Outerparent.children[1]; 

    // Current element
    // Remove animation
    element.style.animation = "none";

    // Children
    // Remove "active" from class name
    child.classList.remove("active")
}