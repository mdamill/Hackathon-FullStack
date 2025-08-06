
const express = require('express');
const cors = require('cors');
const db = require('./config/user');
const userRoutes = require('./routes/userRoute');
require('./model/usermodel'); // just to initialize the model

const app = express();
const port = 8000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173',credentials:true })); // frontend origin

app.use(express.json());

// Routes
app.use('/api', userRoutes);

// DB Connection & Server Start
db.authenticate()
  .then(() => {
    console.log("✅ Database connected");
    return db.sync({ alter: true }); // optional: auto sync tables
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error("❌ Failed to connect DB:", err.message);
  });
