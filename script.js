const button = document.getElementById('myButton');
let clicked = false;

button.addEventListener('click', () => {
  if (!clicked) {
    button.textContent = 'Claim';
    window.open('https://www.youtube.com/', '_blank'); // Replace with your YouTube link
    clicked = true;
  } else if (clicked) {
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-white', 'text-green-500');
    button.textContent = 'Claimed';
    clicked = false; // Reset the clicked variable to false
  }
});
