//The goal was to create an interactive counter where the user can enter a starting number, increment or decrement it, and reset it back to the original value. The color of the number display changes based on its positivity or negativity. The code should adhere to the specified concepts to demonstrate understanding and practice using those concepts.
document.addEventListener('DOMContentLoaded', function() {
   // Get DOM elements
  const numberElement = document.getElementById('number');
  const startButton = document.getElementById('start');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const resetButton = document.getElementById('reset');

  let number = 0; //Initialize the number variable
  // Function to update the number element's text content and color
  function updateNumber() {
    numberElement.textContent = number; // Update the displayed number
    if (number > 0) {
      numberElement.classList.add('positive'); // Add positive class for positive numbers
      numberElement.classList.remove('negative'); // Remove negative class if present
    } else if (number < 0) {
      numberElement.classList.add('negative');
      numberElement.classList.remove('positive');
    } else {
      numberElement.classList.remove('positive', 'negative'); // Remove both classes for zero
    }
  }
  // Event listener for the start button
  startButton.addEventListener('click', function() {
    const inputNumber = parseInt(prompt('Notice: if no valid number is entered, 0 will be the default value\nEnter a number:'));
    number = isNaN(inputNumber) ? 0 : inputNumber; // Set number based on user input or default to 0
    resetInputNumber = inputNumber; // Store inputNumber in a separate variable to later use it on the reset button
    updateNumber(); // Update the displayed number
  });

    // Event listener for the increment button
    incrementButton.addEventListener('click', function(event) {
      number++; // Increment the number
      updateNumber(); // Update the displayed number
      console.log(event.currentTarget); // Log the current target (button) to the console
    });
  
    // Event listener for the decrement button
    decrementButton.addEventListener('click', function(event) {
      number--; // Decrement the number
      updateNumber(); // Update the displayed number
      console.log(event.currentTarget); // Log the current target (button) to the console
    });
  
    // Event listener for the reset button
    resetButton.addEventListener('click', function(event) {
      number = isNaN(resetInputNumber) ? 0 : resetInputNumber; // Reset number to the stored inputNumber
      updateNumber(); // Update the displayed number
      console.log(event.currentTarget); // Log the current target (button) to the console
    });
  
    const buttons = document.querySelectorAll('#button-container button');
    buttons.forEach(function(button) {
      button.style.border.radius = "0.25rem"; // Apply border radius style to each button
    });
  });