// modules
import express from 'express';
import 'dotenv/config';
import authRoute from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/usersRoutes.js'
import mysql from 'mysql'
import { error, pageNotFound } from './middleware/errorHandler.js';
const app = express();
const port = 3001 || process.env.PORT;

// middleware
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/v1/api/auth/', authRoute );
app.use('/v1/api/post/', postRoutes );
app.use('/v1/api/user/', userRoutes );
app.use(pageNotFound);
app.use(error);


app.listen(port , () => {
    console.log(`listening in Port: http://localhost:${port} `)
});