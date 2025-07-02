const form = document.getElementById('loginForm');
const msg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const Email = document.getElementById('Email').value;
  const Name = document.getElementById('Name').value;
  const Message = document.getElementById('Message').value;
  const Phone = document.getElementById('Phone').value;

  try {
    const res = await fetch('https://api.portfolio.buttnetworks.com/portfolio', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Email, Name, Phone, Message })
    });
    const data = await res.json();
    msg.textContent = data.message;
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
  } catch (error) {
    msg.textContent = "⚠️ Error connecting to server!";
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
  }
});
