const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const studentRoutes = require('./Routes/Curd');

const app = express();

// Use the cors middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://tharani3920123:tharani@cluster0.zvvzgpo.mongodb.net/curd', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use(express.json());

// Routes
app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
