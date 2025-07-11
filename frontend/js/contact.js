const form = document.getElementById("contactForm");
const msg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const Email = document.getElementById("Email").value;
  const Name = document.getElementById("Name").value;
  const Message = document.getElementById("Message").value;
  const Phone = document.getElementById("Phone").value;

  try {
    const data = { name, email, phone, message };
    const body = {
      data,
      type: "contact/form",
    };
    const res = await fetch("https://api.buttnetworks.com/gateway", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "User-Agent": navigator.userAgent,
        "Sec-Fetch-Site": "same-origin",
      },
      body: JSON.stringify({ Email, Name, Phone, Message }),
    });

    const response = await res.json();
    msg.textContent = response.message;
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  } catch (error) {
    msg.textContent = "⚠️ Error connecting to server!";
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  }
});
