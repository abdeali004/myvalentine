let no_number = 0;
let yes_number = 1;

document.addEventListener('DOMContentLoaded', function() {
    parseData("1");
    
});

function navigate(page) {
    window.location.href = page;
}

function launchMirrorPage() {
    let current_no_button = document.getElementById('normal-button-no') == null ? document.getElementById('movable-button-no') : document.getElementById('normal-button-no');
    current_no_button.style.display = "none";
    document.getElementById("normal-button-yes").innerText = "Special Room...";
    document.getElementById("normal-button-yes").onclick = function() {
        navigate("mirror");
    };
}

function parseData(input) {
    let number = input == "1" ? no_number++ : yes_number++;
    let current_data = data[input + "-" + number];
    let mirror_page = current_data.hasOwnProperty("mirror-page") ? current_data["mirror-page"] : false;
    if (mirror_page == true){
        launchMirrorPage();
    }
    document.getElementById('gif-img').src = current_data["gif-img"];
    document.getElementById('question').innerText = current_data["question"];
    // Get the hidden input field by its ID
    if (current_data["movable-button"] == true) {
        document.getElementById('normal-button-no').id = "movable-button-no";
        enableMovableButtonNo();
    }
}

function nextPageNo() {
    parseData("1");
}

function nextPageYes() {
    parseData("2");
}

function enableMovableButtonNo() {
    const button = document.getElementById('movable-button-no');

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
}