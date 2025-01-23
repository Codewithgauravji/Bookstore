import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './Route/Book.route.js';
import UserRoute from './Route/user.route.js';
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;

mongoose.connect(URI).then(()=>{console.log("MongoDB database connection established successfully")}).catch(error => console.log(error));
// define a route
app.use('/book', bookRoute);
app.use('/user', UserRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})