let chatId;

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
let clicked = false;

button.addEventListener('click', () => {
  if (!clicked) {
    button.textContent = 'Claim';
    window.open('https://youtu.be/dQw4w9WgXcQ?si=rUeV7tTXonGic1D_', '_blank'); // Replace with your YouTube link
    clicked = true;

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
  } else if (clicked) {
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-white', 'text-green-500');
    button.textContent = 'Claimed';
    clicked = false; // Reset the clicked variable to false
  }
});
