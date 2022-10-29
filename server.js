import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import 'express-async-errors';

//db and auth
import connectDB from './db/connect.js';

//routers
import authRouter from './routes/authRoutes.js';
import animalRouter from './routes/animalRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({ msg: 'Welcome' });
// });

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'Welcome' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/animals', animalRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(err);
  }
};

start();
