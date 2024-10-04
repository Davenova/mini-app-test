// Get the button element
const button = document.getElementById('myButton');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Change the button text to "Claim" and open the YouTube link
  button.textContent = 'Claim';
  button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
  button.classList.add('bg-white', 'text-green-500');
  window.open('https://www.youtube.com/', '_blank'); // Replace with your YouTube link

  // Add another event listener to the button to change its color on second click
  button.textContent = 'Claimed';
  button.addEventListener('click', () => {
    button.classList.add('bg-white', 'text-green-500');
  });
});
