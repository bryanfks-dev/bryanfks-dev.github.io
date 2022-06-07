// Set left margin for main section
// Get elements
let section = document.querySelector("Section");

// Define set section's left margin function
function setLeftMargin() {
    section.style.marginLeft = nav.getBoundingClientRect().width + "px";
}

// Print content to main section
// Get elements
let container = document.querySelector("#content");
let image = document.querySelector("img");

// Declare pointer and typing deceleration (timeout)
let i = 0;
let j = 0;
const decelaration = 20;

// Set contents
const content1 = "My name is Bryan Fernando Kurniawan Suhartono. For short, you can call me Bryan. I was born on December 12th, 2004, so I'm ";
const age = new Date().getFullYear() - 2004;
const content2 = " years old by this year. I'm currently studying Computer Science at Bina Nusantara (BINUS) Malang University in Malang, East Java, Indonesia.  My hobby is experimenting with IT, for example, coding, programming, etc, and playing some games.";
const content3 = "In the summer of 2020, I was starting my journey as a programmer, it began because I was stunned of someone in a math solving group solved an olympiad level math problem using programming (I think it's Java language, I kinda forget about it) (I knew it's an olympiad level problem because I'm the one who asked the explanation to solve it), and I chose C++ as my first programming language to learn. Well, it's really hard to begin with, because C++ is a low-level language which means it's different than human language, but time passes and I'm starting to understand the fundamental of programming which are logic, problem-solving, loop, data type, output, and input, etc. Time by time, I learned many programming languages such as C++, Python, Javascript, PHP, C#, and else. Until now, I'm still continuing my journey as a programmer."

const content = content1 + age + content2;

// Define typing function
function typeWritter0() {
    if (j < content3.length){
        // Add every char one by one from content into container innerHTML
        container.innerHTML += content3.charAt(j);
        // Add 1 j value
        j++;

        // Check if typing is done
        if (j === content3.length) {
            // Make pointer as node element
            const pointer = document.createElement("div");
            pointer.classList.add("pointer");

            // Add pointer into container as children
            container.appendChild(pointer);

            // Change image opacity to visible
            image.style.opacity = "1";
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter0, decelaration);
    }
}

function typeWritter() {
    container.style.opacity = "1";

    if (i < content.length){
        // Add every char one by one from content into container innerHTML
        container.textContent += content.charAt(i);
        // Add 1 i value
        i++;

        // Check if typing is done
        if (i === content.length) {
            // Make br as node element
            const br = document.createElement("br");

            // Append br into container as children
            container.appendChild(br);

            // Run typeWritter0 function
            typeWritter0();
        }

        // Set timeout or delay on this function
        setTimeout(typeWritter, decelaration);
    }
}