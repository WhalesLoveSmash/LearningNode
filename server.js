// server.js
import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
