document.addEventListener('DOMContentLoaded', function() {
    parseData("1-0");
    const button = document.getElementById('movable-button');

    button.addEventListener('click', function() {
        // Generate random positions within the viewport
        const randomTop = Math.random() * (window.innerHeight - button.offsetHeight);
        const randomLeft = Math.random() * (window.innerWidth - button.offsetWidth);

        // Apply the new positions to the button
        button.style.top = `${randomTop}px`;
        button.style.left = `${randomLeft}px`;
    });

    button.addEventListener('mouseover', function() {
        // Generate random positions within the viewport
        const randomTop = Math.random() * (window.innerHeight - button.offsetHeight);
        const randomLeft = Math.random() * (window.innerWidth - button.offsetWidth);
    
        // Apply the new positions to the button
        button.style.top = `${randomTop}px`;
        button.style.left = `${randomLeft}px`;
    });
});

function navigate(page) {
    window.location.href = page;
}

function parseData(input) {
    let current_data = data[input];
    document.getElementById('gif-img').src = current_data["gif-img"];
    document.getElementById('question').innerText = current_data["question"];
    // Get the hidden input field by its ID
    document.getElementById('question-number').value = nextPageNumber(input);
}

function nextPageNumber(input) {
// Split the string by the hyphen
let parts = input.split('-');

// Increment the second part (convert it to a number, increment, and convert back to a string)
parts[1] = (parseInt(parts[1]) + 1).toString();

// Join the parts back into the original format
let newStr = parts.join('-');

return newStr;
}

function nextPage() {
    parseData(document.getElementById('question-number').value);
}