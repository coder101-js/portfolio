// controller/contact.js
const express = require("express");
const Contact = require('../Database/contact'); // adjust path if needed

const router = express.Router();

// POST /contact - handle contact form submission
router.post('/portfolio', async (req, res) => {
  try {
    const { Name, Email, Phone, Message } = req.body;
    const newContact = new Contact({ Name, Email, Phone, Message });
    await newContact.save();
    res.json({ message: '✅✅ Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error saving contact message:', error);
    res.status(500).json({ message: 'Error sending message.' });
  }
});

module.exports = router;

