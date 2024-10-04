// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', () => {
  if (button.textContent.trim() === 'Check') {
    // Open the YouTube link and change the button text to "Claim"
    button.textContent = 'Claim';
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-white', 'text-green-500');
    window.open('https://www.youtube.com/', '_blank'); // Replace with your YouTube link
  } else {
    // On subsequent clicks, only change the button color
    button.classList.add('bg-white', 'text-green-500');
  }
});
