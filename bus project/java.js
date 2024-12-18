// List of possible "To" locations
const toLocations = ["SALEM", "MADURAI", "DINDUGAL", "TIRUPUR", "ERODE","THIRUNELVELI"];

// Get the element displaying the "To" location
const toLocation = document.getElementById('to-location');
const changeIcon = document.getElementById('change-icon');

// Track the current index of the "To" location
let currentLocationIndex = 0;

// Function to change the "To" location
function changeToLocation() {
    // Move to the next location in the list
    currentLocationIndex = (currentLocationIndex + 1) % toLocations.length;

    // Update the "To" location on the page
    toLocation.textContent = toLocations[currentLocationIndex];
}

// Add an event listener to the icon to change the "To" location on click
changeIcon.addEventListener('click', changeToLocation);
