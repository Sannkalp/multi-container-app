const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/myappdb';

MongoClient.connect(mongoUrl, (err, client) => {
  if (err) throw err;

  console.log('Connected to MongoDB!');
  const db = client.db('myappdb');

  app.get('/', (req, res) => {
    res.send('Hello from Node.js API with MongoDB!');
  });

  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
});

