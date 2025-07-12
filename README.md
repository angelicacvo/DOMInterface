# DOM Interface

This project is a simple web interface built with HTML, CSS, JavaScript and Bootstrap. It allows users to enter a name and age, which are then saved in `localStorage`. Additionally, it uses `sessionStorage` to count interactions within the same session.

## Features
- Form input for name and age.
- Data validation before saving:
  - Name input is trimmed and checked for non-empty value.
  - Age input is converted to an integer and validated to ensure it is a number within a reasonable range (0 to 120).
- Data is stored in `localStorage` so it persists between page reloads.
- A message is displayed based on the stored data.
- Interaction counter using `sessionStorage` that updates every time the "Save" or "Clear" button is clicked.
- Data can be cleared using the "Clear" button, which also resets the form inputs and updates the output display.

## Technologies Used

- HTML5
- JavaScript (DOM manipulation, validation, localStorage and sessionStorage)
- Bootstrap 5.3.7
- Optional custom CSS (`./src/styles/styles.css`)

## File Structure


project-root/
│


├── index.html


├── src/


│ ├── js/


│ │ └── index.js # JavaScript logic (form handling, validation, storage)


│ └── styles/


│ └── styles.css # Optional styles (empty or user-defined)

## How It Works

1. **User Input:**
   - The user fills in the name and age fields.
   - The "Save" button triggers validation and stores the data in `localStorage`.

2. **Data Display:**
   - On successful save, a personalized message is shown with the stored data.
   - On page reload, the message is reloaded from `localStorage` using `window.onload`.

3. **Interaction Tracking:**
   - A counter stored in `sessionStorage` tracks how many times the user interacts with the form (save or clear).

4. **Clear Functionality:**
   - The "Clear" button removes all stored data, resets input fields, and updates the displayed message.

## Important Notes

- `addEventListener` is used properly by passing the function reference, not the result of its execution.
- Validations ensure that the app behaves safely even if unexpected values are entered.
- `localStorage.clear()` clears all local storage keys. If other unrelated keys are stored, use `removeItem()` instead.
- The interface is responsive due to Bootstrap.

## To Run the Project

Just open `index.html` in a web browser. No backend or server setup is required.

## Author
Angelica Maria Cuervo
Created as part of a DOM and JavaScript storage practice exercise in Riwi.

## github repository
https://github.com/angelicacvo/DOMInterface
