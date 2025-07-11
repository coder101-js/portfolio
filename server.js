const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const rateLimit = require("express-rate-limit");

// const botProtection = require("./middleware/bot");
const contact = require("./controller/contact");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// === Middlewares ===

const corsOptions = {
  origin: "https://portfolio.buttnetworks.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));  // Allow cross-origin on all




app.use(express.json());

// Bot protection middleware
app.use(botProtection);

// === Logging middleware ===


// === Rate limiting middleware ===
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests. Please try again later.",
});
app.use(limiter);

// === Routes ===

app.use("/contact", contact);

// === MongoDB connection ===
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB connected!"))
  .catch((err) => console.error(" MongoDB connection error:", err));

// === Start server ===
app.listen(PORT, () =>
  console.log(` Server running at http://localhost:${PORT}`)
);
