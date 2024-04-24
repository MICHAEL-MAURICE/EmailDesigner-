// Function to change the background color of the header
function changeHeaderColor() {
    const color = document.getElementById("header-color").value;
    document.querySelectorAll(".header-Footer").forEach((element) => {
        element.style.backgroundColor = color;
    });
}

// Function to change text color of title
function changeTextColor() {
    const color = document.getElementById("text-color").value;
    document.querySelectorAll(".text-color").forEach((element) => {
        element.style.color = color;
    });
}

// Function to change border color
function changeBorderColor(event) {
    const color = event.target.value;
    document.getElementById('borderstyle').style.borderColor = color;
}


function changeBorderStyle(style) {
    document.getElementById('borderstyle').style.borderStyle = style;
    document.getElementById('border-thickness').disabled = false;
    document.getElementById('border-color').disabled = false;
}


function changeBorderThickness(event) {
    const thickness = event.target.value + 'px';
    document.getElementById('borderstyle').style.borderWidth = thickness;

}


function toggleElementVisibility(elementId) {
    var checkbox = document.getElementById(elementId + 'Checkbox');
    var elementDiv = document.getElementById(elementId);
    if (!checkbox.checked) {
        elementDiv.style.display = 'block';
    } else {
        elementDiv.style.display = 'none';
    }
}


function changeFontFamily() {
    var fontSelector = document.getElementById("fontSelector");
    var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
    console.log(selectedFont);

    document.querySelectorAll(".text-color").forEach((element) => {
        element.style.fontFamily = selectedFont;
    });
}



function toggleReminderVisibility() {
    var checkbox = document.getElementById("reminderCheckbox");
    var reminderText = document.getElementById("reminderText");
    var newText = document.getElementById("newText");

    if (checkbox.checked) {
    console.log("Qqqqqqqqqqqqqq")
    document.getElementById("reminderText").textContent = "";
        newText.style.display = "block";
    } else {
        console.log("ffffffffffffffffff")
        document.getElementById("reminderText").textContent= "A reminder of your total outstanding";
        newText.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("newText").addEventListener("input", function() {
        document.getElementById("reminderText").textContent = document.getElementById("newText").value;
    });
});







function saveRenderedHTML() {
    // Get the rendered HTML content of the entire document
    const renderedHTML =  document.getElementById('borderstyle').outerHTML;

    // Create a new Blob object with the rendered HTML content
    const blob = new Blob([renderedHTML], { type: 'text/html' });

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);

    // Set the filename for the saved file
    a.download = 'rendered_content.html';

    // Append the anchor element to the document body
    document.body.appendChild(a);

    // Click the anchor element to trigger the download
    a.click();

    // Remove the anchor element from the document body
    document.body.removeChild(a);
}