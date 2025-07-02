const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

const botProtection = require('./middleware/bot');
const index = require('./controller/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// === Middlewares ===
app.use(cors({
  origin: [
    "https://portfolio.buttnetworks.com",
    "https://www.portfolio.buttnetworks.com"
  ],
  credentials: false // set to true if using cookies
}));

app.use(express.json());

// Bot protection middleware
app.use(botProtection);

// === Logging middleware ===
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`, req.body);
  next();
});

// === Rate limiting middleware ===
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests. Please try again later.',
});
app.use(limiter);

// === Routes ===
app.use('/', index);

// === MongoDB connection ===
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// === Start server ===
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

