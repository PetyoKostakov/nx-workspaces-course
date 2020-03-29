/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { API_URL, ApiResponse } from '@nx-workspaces-course/api-interface';
import { getGames } from './app/game';
import { createReview, getReviews } from './app/review';
import { addItemToCart, getCart, updateItemInCart } from './app/store';

const app = express();

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse);
});

app.get('/api/game', getGames);

app.get('/api/review/:game', getReviews);
app.post('/api/review/:game', createReview);

app.get('/api/cart', getCart);
app.post('/api/cart', addItemToCart);
app.put('/api/cart', updateItemInCart);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
