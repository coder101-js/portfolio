const form = document.getElementById("contactForm");
const msg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const Email = document.getElementById("Email").value;
  const Name = document.getElementById("Name").value;
  const Message = document.getElementById("Message").value;
  const Phone = document.getElementById("Phone").value;

  try {
    const data = { Name, Email, Phone, Message };
    const body = {
      data,
      type: "contact/form",
    };
    const server = await fetch(`https://api.buttnetworks.com/gateway`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const response = await server.json();
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
