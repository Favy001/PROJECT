const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');
const sendButton = document.getElementById('sendMessage');
const paypalLink = document.getElementById('paypalLink');

const paypalAccount = 'https://paypal.me/yourbrand';
paypalLink.href = paypalAccount;
paypalLink.textContent = 'PayPal: ' + paypalAccount.replace('https://', '');

function addMessage(text, outgoing = true) {
  const message = document.createElement('div');
  message.className = `msg ${outgoing ? 'outgoing' : 'incoming'}`;
  message.textContent = text;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendButton.addEventListener('click', () => {
  const value = chatInput.value.trim();
  if (!value) return;

  addMessage(value, true);
  chatInput.value = '';

  setTimeout(() => {
    const replies = [
      'Sounds great! I’m joining in.',
      'That is a smart idea for the community.',
      'Let’s plan it and share the details soon.',
      'Happy to help with this launch.'
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addMessage(reply, false);
  }, 420);
});

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

const postButtons = document.querySelectorAll('.post-actions button');
postButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const originalText = button.textContent;
    button.textContent = 'Done ✓';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 800);
  });
});
