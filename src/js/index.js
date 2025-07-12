// Bring elements from HTML with getElementById
const saveBtn = document.getElementById("saveBtn")
const clearBtn = document.getElementById("clearBtn")

// add event click to save button
// create const to name and age and eliminate blank spaces
// value is to bring data from element input
// convert age to int 
document.getElementById('saveBtn').addEventListener('click', () => {
    const nameInput = document.getElementById("exampleFormControlInput1")
    const ageInput = document.getElementById("exampleFormControlInput2")
    if (!nameInput || !ageInput) {
        console.error("Los datos no existen")
        return
    }
    
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    if (!name) {
        alert("Please enter a name.");
        return;
    }

    if (isNaN(age) || age < 0 || age > 120) {
        alert("Please enter a valid age.");
        return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);
    displayData();
});

// show in div=output data saved in local Storage
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
        // text content to add text to the div
        outputDiv.textContent = `Hi ${name}, you are ${age} years old`
    } else {
        outputDiv.textContent = "There's not data in local storage"
    }
}

// when the window loads it shows the storaged data in local storage
window.onload = displayData();

// counter with sessionStorage
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0)
}

// update session counter with interactions
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`Interactions in this session: ${count}`);
}

// Assign events to the counter
document.getElementById('saveBtn').addEventListener('click', updateInteractionCount());
document.getElementById('clearBtn').addEventListener('click', updateInteractionCount());

// clear data
document.getElementById('clearBtn').addEventListener('click', () => {
    // hacer una funcion para llimpiar el formulario
    const nameInput = document.getElementById("exampleFormControlInput1").value = "";
    const ageInput = document.getElementById("exampleFormControlInput2").value = "";
    localStorage.clear();
    displayData();
})
