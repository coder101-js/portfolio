const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

const botProtection = require('./middleware/bot');
const contact = require('./controller/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// === Middlewares ===
// app.use(cors());
app.get('home',(req,res)=>{
  return res.json({msg:'hello'})
})
app.use(cors({
  origin: 'https://portfolio.buttnetworks.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
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

app.use('/', contact);

// === MongoDB connection ===
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// === Start server ===
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

