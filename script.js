const button = document.getElementById('myButton');
let claimed = false;
let chatId = null;

// Set up a webhook to receive updates from Telegram
const webhookUrl = 'https://your-webhook-url.com/telegram-webhook';
fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/setWebhook`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: webhookUrl
  })
});

// Handle incoming updates from Telegram
fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(update => {
  chatId = update.message.chat.id;
  // Initialize the button state
  fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/getChat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result.claimed_button) {
      claimed = true;
      button.textContent = 'Claimed';
      button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
      button.classList.add('bg-white', 'text-green-500', 'pointer-events-none');
      button.disabled = true;
    } else {
      button.textContent = 'Check';
      button.disabled = false;
    }
  });
});

button.addEventListener('click', () => {
  if (button.textContent === 'Check') {
    // Open YouTube link when "Check" button is clicked
    window.open('https://www.youtube.com/', '_blank');
    button.textContent = 'Claim';
    button.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    button.classList.add('bg-orange-500', 'hover:bg-orange-700');
    button.disabled = false;
  } else if (button.textContent === 'Claim') {
    fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/setChat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        claimed_button: true
      })
    });
    button.textContent = 'Claimed';
    button.classList.remove('bg-orange-500', 'hover:bg-orange-700');
    button.classList.add('bg-white', 'text-green-500', 'pointer-events-none');
    button.disabled = true;
  } else {
    fetch(`https://api.telegram.org/bot7685147619:AAGivfwk7FFDwbldf47l0-ktlK1TEpMoT78/setChat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        claimed_button: false
      })
    });
    button.textContent = 'Check';
    button.classList.remove('bg-white', 'text-green-500', 'pointer-events-none');
    button.classList.add('bg-blue-500', 'hover:bg-blue-700');
  }
});
