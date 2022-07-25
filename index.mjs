import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import AllRouters from './routes/routes.all.mjs';
// import errorMiddleware from './middlewares/errormiddleware.js';

const envFilePath = '.env';
dotenv.config({ path: path.normalize(envFilePath) });

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'html');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));
// Expose the files stored in the distribution folder
app.use(express.static('dist'));
app.use(express.static('src'));
app.use(cors());

const routers = [AllRouters];
routers.forEach((router) => app.use('/', router));

// app.use(errorMiddleware);
// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}`);
});
