let chatId;
let claimed = localStorage.getItem('claimed_button'); // Check if claimed_button is set in localStorage

// Retrieve chat ID from Telegram Bot API
fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/getUpdates`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  chatId = data.result[0].message.chat.id;
  console.log(`Chat ID: ${chatId}`);
});

const button = document.getElementById('myButton');

if (claimed === 'true') {
  // If claimed_button is set to true in localStorage, update the button state
  button.textContent = 'Claimed';
  button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
  button.classList.add('bg-white', 'text-green-500');
} else {
  button.textContent = 'Check';
}

button.addEventListener('click', () => {
  if (!claimed) {
    button.textContent = 'Claim';
    window.open('https://youtu.be/dQw4w9WgXcQ?si=rUeV7tTXonGic1D_', '_blank'); // Replace with your YouTube link

    // Set claimed_button to true in localStorage
    localStorage.setItem('claimed_button', 'true');

    // Send request to Telegram Bot API to update user's status
    fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/setChatData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        key: 'claimed_button',
        value: 'true'
      })
    });
  } else {
    button.classList.remove('bg-white', 'text-green-500');
    button.classList.add('bg-blue-500', 'hover:bg-blue-700');
    button.textContent = 'Check';
    localStorage.removeItem('claimed_button'); // Remove claimed_button from localStorage
  }
  claimed = localStorage.getItem('claimed_button'); // Update claimed variable
});
