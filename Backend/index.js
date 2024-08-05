import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';

const app = express();
app.use(express.json());
app.use('/books', booksRoute);

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('BookHub MERN Stack Application');
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });