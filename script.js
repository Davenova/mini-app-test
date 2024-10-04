const button = document.getElementById('myButton');

let claimed = localStorage.getItem('claimed_button');

if (claimed === 'true') {
  button.textContent = 'Claimed';
  button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
  button.classList.add('bg-white', 'text-green-500');
} else {
  button.textContent = 'Check';
}

button.addEventListener('click', () => {
  if (!claimed) {
    localStorage.setItem('claimed_button', 'true');
    button.textContent = 'Claimed';
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-white', 'text-green-500');
  } else {
    localStorage.removeItem('claimed_button');
    button.textContent = 'Check';
    button.classList.remove('bg-white', 'text-green-500');
    button.classList.add('bg-blue-500', 'hover:bg-blue-700');
  }
  claimed = localStorage.getItem('claimed_button');
});
