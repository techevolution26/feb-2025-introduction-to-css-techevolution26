
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const welcomeMessage = document.getElementById('welcome-message');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementContainer = document.getElementById('element-container');
    
    const messages = [
        "Welcome to our demonstration page!",
        "Hello there! Thanks for visiting.",
        "You're interacting with dynamic content!",
        "JavaScript makes web pages interactive!"
    ];
    
    // Counter for message rotation
    let messageIndex = 0;
    
    // Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        messageIndex = (messageIndex + 1) % messages.length;
        welcomeMessage.textContent = messages[messageIndex];
    });
    
    //Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        welcomeMessage.classList.toggle('highlight');
        
        // Change button text based on state
        if (welcomeMessage.classList.contains('highlight')) {
            changeStyleBtn.textContent = 'Remove Highlight';
        } else {
            changeStyleBtn.textContent = 'Add Highlight';
        }
    });
    
    // Add or remove an element when a button is clicked
    toggleElementBtn.addEventListener('click', function() {
        const paragraph = elementContainer.querySelector('p');
        
        if (paragraph) {
            elementContainer.removeChild(paragraph);
            toggleElementBtn.textContent = 'Add Element';
        } else {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'This is a newly added element!';
            elementContainer.appendChild(newParagraph);
            toggleElementBtn.textContent = 'Remove Element';
        }
    });
    
    // Additional interactive feature change background color
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e9e9e9';
        });
        
        section.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
    });
});