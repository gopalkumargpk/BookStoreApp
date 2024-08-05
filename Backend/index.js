import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/books', bookRoute);
app.use('/user', userRoute);
app.get('/', (req, res) => {
  res.send('bookStore App');
});

// MongoDB Connection
mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Start the Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

