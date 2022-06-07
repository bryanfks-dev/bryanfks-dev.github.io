// Set left margin for main section
// Get elements
let section = document.querySelector("Section");

// Define set section's left margin function
function setLeftMargin() {
    section.style.marginLeft = nav.getBoundingClientRect().width + "px";
}