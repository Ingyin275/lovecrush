// Function to calculate random position within viewport with maximum height limit
function getRandomPosition() {
    let screenWidth = 428; // Screen width of iPhone 15 Pro Max
    let screenHeight = 926; // Screen height of iPhone 15 Pro Max
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let maxTop = Math.min(viewportHeight - noButton.clientHeight, screenHeight);
    let maxLeft = Math.min(screenWidth - noButton.clientWidth, viewportWidth);
    let randomTop = Math.random() * maxTop;
    let randomLeft = Math.random() * maxLeft;
    return { top: randomTop, left: randomLeft };
}

// Add event listener for the "Yes" button click
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("header").textContent = "I love you too";
    document.getElementById("cartoon").src = "https://i.pinimg.com/originals/84/1b/c7/841bc7c159306636be74feec34b28194.gif"; // Change the cartoon image
    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
});

// Add event listener for the "No" button click (preventing default action)
document.getElementById("noButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default click event behavior
});

// Variables to store the "No" button
let noButton = document.getElementById("noButton");

// Add event listener for the "No" button touchstart (for mobile devices)
noButton.addEventListener("touchstart", function(event) {
    // Prevent default touch event behavior
    event.preventDefault();
    // Calculate random position within viewport
    let newPosition = getRandomPosition();
    // Set new position
    this.style.top = `${newPosition.top}px`;
    this.style.left = `${newPosition.left}px`;
});

// Add event listener for the "No" button mouseover
noButton.addEventListener("mouseover", function() {
    // Calculate random position within viewport
    let newPosition = getRandomPosition();
    // Set new position
    this.style.top = `${newPosition.top}px`;
    this.style.left = `${newPosition.left}px`;
});
