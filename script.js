// Get the button element
const button = document.getElementById('myButton');
let clicked = false;

// Add an event listener to the button
button.addEventListener('click', () => {
  if (!clicked) {
    // Change the button text to "Claim" and open the YouTube link
    button.textContent = 'Claim';
    window.open('https://www.youtube.com/', '_blank'); // Replace with your YouTube link
    clicked = true;
  } else {
    // Change the button color to green and background to white
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-white', 'text-green-500');
    button.textContent = 'Claimed';
  }
});
